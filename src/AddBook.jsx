import React, { useContext } from "react";
import { AuthContext } from "./Providers/AuthProviders";
import Swal from "sweetalert2";
import { Toaster, toast } from "react-hot-toast";

const AddBook = () => {
    const { user } = useContext(AuthContext);
    // console.log(user);
    const handleSave = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const price = parseFloat(form.price.value);
        const discount = parseInt(form.discount.value);
        const availableQuantity = parseInt(form.availableQuantity.value);
        const categoryName = form.category.value;
        const author = form.author.value;
        const authorUserName = form.authorUserName.value;
        const description = form.description.value;
        const addedBy = user.email;
        let categoryID;
        if (categoryName == "hadis") {
            categoryID = 1;
        } else if (categoryName == "jiboni") {
            categoryID = 2;
        } else if (categoryName == "islamicBook") {
            categoryID = 3;
        } else if (categoryName == "motivation") {
            categoryID = 4;
        } else if (categoryName == "vocabulary") {
            categoryID = 5;
        } else {
            categoryID = null;
        }

        const book = {
            name,
            photo,
            price,
            discount,
            categoryName,
            availableQuantity,
            description,
            categoryID,
            author,
            authorUserName,
            addedBy,
        };
        console.log(book);
        fetch("https://islam-house-pub.vercel.app/books", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(book),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.acknowledged) {
                    toast.success("Books Added Successful");
                }
            });
    };
    return (
        <div className="w-fit min-h-[91vh] flex justify-center  items-center mx-auto py-6">
            <form
                onSubmit={handleSave}
                className="shadow-md shadow-success rounded-2xl px-5 lg:px-10 border py-10 lg:py-16"
            >
                <h1 className="text-2xl lg:text-4xl font-medium text-center mb-10">
                    Add A Book
                </h1>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 md:gap-4 lg:gap-5">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Book Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Name"
                            name="name"
                            required
                            className="input input-bordered input-success focus:outline-none lg:w-[350px] w-[300px]"
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Photo URL"
                            name="photo"
                            required
                            className="input input-bordered input-success focus:outline-none lg:w-[350px] w-[300px]"
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <select
                            name="category"
                            required
                            className="input input-bordered input-success focus:outline-none lg:w-[350px] w-[300px]"
                        >
                            <option value="">Select a Category</option>
                            <option value="hadis">Hadis</option>
                            <option value="jiboni">Jiboni</option>
                            <option value="islamicBook">Islamic Books</option>
                            <option value="motivation">
                                Motivational Books
                            </option>
                            <option value="vocabulary">Vocabulary</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Price"
                            name="price"
                            required
                            className="input input-bordered input-success focus:outline-none lg:w-[350px] w-[300px]"
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Discount</span>
                        </label>
                        <input
                            type="number"
                            placeholder="Discount in %"
                            name="discount"
                            className="input input-bordered input-success focus:outline-none lg:w-[350px] w-[300px]"
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">
                                Available Quantity
                            </span>
                        </label>
                        <input
                            type="number"
                            placeholder="Available Quantity"
                            name="availableQuantity"
                            required
                            className="input input-bordered input-success focus:outline-none lg:w-[350px] w-[300px]"
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Author Name</span>
                        </label>
                        <input
                            type="Text"
                            placeholder="Author Name"
                            name="author"
                            required
                            className="input input-bordered input-success focus:outline-none lg:w-[350px] w-[300px]"
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Author User Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="example123"
                            name="authorUserName"
                            required
                            className="input input-bordered input-success focus:outline-none lg:w-[350px] w-[300px]"
                        />
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Descriptions</span>
                    </label>
                    <textarea
                        type="text"
                        placeholder="Descriptions"
                        name="description"
                        required
                        className="textarea textarea-success focus:outline-none md:w-full w-[300px]"
                    />
                </div>
                <div className="w-full flex justify-center items-center mt-5">
                    <input
                        type="submit"
                        value="Save Book"
                        className="bg-[#149352] cursor-pointer text-white py-[10px] rounded-3xl mt-4 hover:bg-transparent hover:text-[#149352] hover:outline outline-[#149352] font-medium w-fit px-16"
                    />
                </div>
            </form>
            <Toaster></Toaster>
        </div>
    );
};

export default AddBook;
