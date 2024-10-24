"use client";
import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useForm, FormProvider, Controller } from "react-hook-form";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import DatePicker from "@/components/(form)/DatePicker";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { format } from "date-fns";
import app from "../shared/FirebaseConfig";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const createValidationSchema = Yup.object().shape({
  title: Yup.string()
    .required("Title is required.")
    .min(5, "Title must be at least 5 characters long."),
  desc: Yup.string()
    .required("Message is required.")
    .min(10, "Message must be at least 10 characters long."),
  "default-datepicker": Yup.date().required("Date is required.").nullable(),
  location: Yup.string()
    .required("Location is required.")
    .min(3, "Location must be at least 3 characters long."),
  zipcode: Yup.string()
    .required("Zipcode is required.")
    .matches(/^[0-9]{5}$/, "Zipcode must be exactly 5 digits."),
  countries: Yup.string().required("Country selection is required."),
  file_input: Yup.mixed()
    .required("File is required.")
    .test("fileSize", "File size is too large", (value) => {
      return value && value[0] && value[0].size <= 2000000; // 2MB limit
    }),
});

const CreatePosts = () => {
  const db = getFirestore(app);
  const methods = useForm({
    resolver: yupResolver(createValidationSchema),
  });

  const {
    handleSubmit,
    reset,
    register,
    control,
    formState: { errors },
  } = methods;
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      const timer = setTimeout(() => {
        toast.error("You must be logged in to create posts.");
        router.push("/");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [session, router]);

  const onSubmit = async (data) => {
    const date = new Date(data["default-datepicker"]);

    const options = { day: "2-digit", month: "long", year: "numeric" };
    const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
      date
    );
    data["default-datepicker"] = formattedDate;
    data["calender"] = data["default-datepicker"];
    delete data["default-datepicker"];
    const file = data.file_input ? data.file_input[0] : null;
    if (file) {
      const storage = getStorage(app);
      const storageRef = ref(storage, `discover_player_posts/${file.name}`);
      await uploadBytes(storageRef, file);
      const fileURL = await getDownloadURL(storageRef);
      data.image = fileURL;
    }

    delete data.file_input;
    await setDoc(doc(db, "posts", Date.now().toString()), {
      ...data,
    });

    Swal.fire({
      icon: "success",
      title: "Submission Successful",
      text: "Your data has been submitted successfully!",
      confirmButtonText: "Ok",
    })
      .then(() => {
        reset();
      })
      .catch(() => {
        toast.error("Error uploading file. Please try again.");
      });
  };

  return (
    <div className="mt-4">
      <div className="text-center">
        <h1 className="sm:text-3xl text-2xl font-bold title-font text-indigo-500 mb-4 tracking-widest">
          CREATE POST
        </h1>
        <p className="text-lg leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500">
          Create Post and Discover/invite new Friends and Players
        </p>
        <div className="flex mt-6 justify-center">
          <div className="w-16 h-1 rounded-full bg-orange-400 inline-flex"></div>
        </div>
      </div>
      <FormProvider {...methods}>
        <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-6 mb-6 place-items-center px-2">
            <div className="w-full max-w-[600px]">
              <label
                htmlFor="title"
                className="block mb-2 text-sm font-bold text-gray-500"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Title"
                {...register("title")}
              />
              {errors.title && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.title.message}
                </p>
              )}
            </div>
            <div className="w-full max-w-[600px]">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-bold text-gray-500"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="4"
                className="block p-2.5 w-full text-sm text-gray-500 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Write Description here"
                {...register("desc")}
              ></textarea>
              {errors.desc && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.desc.message}
                </p>
              )}
            </div>
            <DatePicker reg={register("default-datepicker")} />
            <div className="w-full max-w-[600px]">
              <label
                htmlFor="location"
                className="block mb-2 text-sm font-bold text-gray-500"
              >
                Location
              </label>
              <input
                type="text"
                id="location"
                className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Location"
                {...register("location")}
              />
              {errors.location && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.location.message}
                </p>
              )}
            </div>
            <div className="w-full max-w-[600px]">
              <label
                htmlFor="zipcode"
                className="block mb-2 text-sm font-bold text-gray-500"
              >
                ZipCode
              </label>
              <input
                type="number"
                id="zipcode"
                className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="ZipCode"
                {...register("zipcode")}
              />
              {errors.zipcode && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.zipcode.message}
                </p>
              )}
            </div>
            <div className="w-full max-w-[600px]">
              <label
                htmlFor="countries"
                className="block mb-2 text-sm font-bold text-gray-500"
              >
                Select an option
              </label>
              <Controller
                name="countries"
                control={control}
                render={({ field }) => (
                  <select
                    id="countries"
                    className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    {...field}
                  >
                    <option value="" disabled>
                      Choose a country
                    </option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                  </select>
                )}
              />
              {errors.countries && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.countries.message}
                </p>
              )}
            </div>
            <div className="w-full max-w-[600px]">
              <label
                htmlFor="file"
                className="block mb-2 text-sm font-bold text-gray-500"
              >
                Upload file
              </label>
              <input
                className="block w-full text-sm text-gray-500 border border-gray-300 rounded-lg cursor-pointer bg-gray-50"
                id="file_input"
                type="file"
                {...register("file_input")}
              />
              {errors.file_input && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.file_input.message}
                </p>
              )}
            </div>
            <div className="w-full max-w-[600px]">
              <button
                type="submit"
                className="text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 text-center"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default CreatePosts;
