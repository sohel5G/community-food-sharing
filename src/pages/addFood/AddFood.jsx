
const AddFood = () => {

    const user = { img: "https://i.ibb.co/k2mWfq6/placeholder.jpg", name: "", email: "" }

    const handleAddNewFood = (e) => {
        e.preventDefault();
        const form = e.target;

        const food_name = form.food_name.value;
        const food_image = form.food_image.value;
        const pickup_location = form.pickup_location.value;
        const food_quantity = form.food_quantity.value;
        const expired_time = form.expired_time.value;
        const additional_notes = form.additional_notes.value;
        const donator_image = user.img || "https://i.ibb.co/k2mWfq6/placeholder.jpg";
        const donator_name = user.name || "Unknown";
        const donator_email = user.email || "Unknown";
        const food_status = "Available"

        const food = {
            food_name,
            food_image,
            pickup_location,
            food_quantity,
            expired_time,
            additional_notes,
            donator_image,
            donator_name,
            donator_email,
            food_status
        }

        console.log(food)
    }

    return (
        <>
            <section className="py-8">
                <div className="pt-4 pb-8 rounded-md px-4 mx-auto max-w-2xl dark:border dark:border-gray-700 shadow">
                    <h2 className="mb-12 text-4xl font-medium text-gray-900 dark:text-white">
                        Add A New Food
                    </h2>
                    <form onSubmit={handleAddNewFood}>
                        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                            <div className="sm:col-span-2">
                                <label
                                    htmlFor="food_name"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Food Name
                                </label>
                                <input
                                    type="text"
                                    name="food_name"
                                    id="food_name"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Add a Food Name"
                                    required
                                />
                            </div>
                            <div className="sm:col-span-2">
                                <label
                                    htmlFor="food_image"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Food Image URL
                                </label>
                                <input
                                    type="url"
                                    name="food_image"
                                    id="food_image"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Food Image URL"
                                    required
                                />
                            </div>
                            <div className="sm:col-span-2">
                                <label
                                    htmlFor="pickup_location"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Pickup Location
                                </label>
                                <input
                                    type="text"
                                    name="pickup_location"
                                    id="pickup_location"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Pickup Location"
                                    required
                                />
                            </div>
                            <div className="w-full">
                                <label
                                    htmlFor="food_quantity"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Food Quantity (no.of person to be served)
                                </label>
                                <input
                                    type="number"
                                    name="food_quantity"
                                    id="food_quantity"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Food Quantity"
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="expired_time"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Expired Time
                                </label>
                                <select
                                    name="expired_time"
                                    id="expired_time"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    required
                                >
                                    <option value="">Expired Time</option>
                                    <option value="3">3 hr</option>
                                    <option value="7">7 hr</option>
                                    <option value="12">12 hr</option>
                                    <option value="24">24 hr</option>
                                    <option value="36">36 hr</option>
                                    <option value="48">48 hr</option>
                                    <option value="60">60 hr</option>
                                    <option value="72">72 hr</option>
                                </select>
                            </div>

                            <div className="sm:col-span-2">
                                <label
                                    htmlFor="additional_notes"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Additional Notes
                                </label>
                                <textarea
                                    name="additional_notes"
                                    id="additional_notes"
                                    rows={6}
                                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Write your additional notes here..."
                                    required
                                />
                            </div>
                        </div>
                        <input
                            type="submit"
                            value="Add Food"
                            className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
                        />
                    </form>
                </div>
            </section>

        </>
    );
};

export default AddFood;