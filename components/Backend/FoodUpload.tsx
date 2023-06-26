import bfs from "../../axios";
import React from "react";

const FoodUpload = () => {
  const [response, setResponse] = React.useState("");

  const [foodBody, setFoodBody] = React.useState<{
    foodName: string;
    foodDescription: string;
    foodIndex: string;
    foodComplementary: string;
    foodImage: string | ArrayBuffer | null;
    foodPrice: string;
  }>({
    foodName: "",
    foodDescription: "",
    foodIndex: "",
    foodComplementary: "",
    foodImage: "",
    foodPrice: "",
  });

  const handleSubmit = async () => {
    const res = await bfs.post("/admin/createnewfood", foodBody);
    setResponse(res.data);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFoodBody((prevFoodBody) => ({
      ...prevFoodBody,
      [name]: value,
    }));
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setFoodBody((prevFoodBody) => ({
        ...prevFoodBody,
        foodImage: reader.result,
      }));
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col space-y-6 font-jost-300">
      <input
        className="border py-3 px-4 rounded-md"
        type="text"
        placeholder="Food Name"
        name="foodName"
        value={foodBody.foodName}
        onChange={handleChange}
      />
      <input
        className="border py-3 px-4 rounded-md"
        type="text"
        placeholder="Food Description"
        name="foodDescription"
        value={foodBody.foodDescription}
        onChange={handleChange}
      />
      <input
        className="border py-3 px-4 rounded-md"
        type="text"
        placeholder="Complementary"
        name="foodComplementary"
        value={foodBody.foodComplementary}
        onChange={handleChange}
      />
      <input
        className="border py-3 px-4 rounded-md"
        type="text"
        placeholder="Food Index"
        name="foodIndex"
        value={foodBody.foodIndex}
        onChange={handleChange}
      />
      <input
        className="border py-3 px-4 rounded-md"
        type="text"
        placeholder="Food Price"
        name="foodPrice"
        value={foodBody.foodPrice}
        onChange={handleChange}
      />
      <div className="border p-12 space-y-6">
        <input onChange={handleFileChange} accept="image" type="file" />
        {foodBody.foodImage !== "" && foodBody.foodImage !== null && (
          <img src={foodBody.foodImage.toString()} alt="Food" />
        )}
      </div>
      <button
        onClick={handleSubmit}
        className="bg-sky-400 max-w-fit px-4 py-2 rounded-md text-white tracking-wider"
      >
        SUBMIT
      </button>
      <p>{response}</p>
    </div>
  );
};

export default FoodUpload;
