import React, { useEffect, useState, createContext } from "react";
import axios from "axios";

const MenContext = createContext();

export const MenContextProvider = ({ children }) => {
  const [menProducts, setMenProducts] = useState({
    allProducts: [],
    topWearProducts: [],
  });
  const [singleProduct, setSingleProduct] = useState(null);
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const response = await axios.get("Men_Products.json");
      console.log(response.data);

      setMenProducts({
        allProducts: response.data.Men,
        topWearProducts: response.data.Men.filter(
          (product) => product.type === "Topwear"
        ),
      });
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };
  const getSingleProduct = async (productId) => {
    try {
      const response = await axios.get(`http://localhost:3032/Men/${productId}`);
      setSingleProduct(response.data); 
    //   console.log(singleProduct)// Assuming your API returns the product data
    } catch (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          console.log("Error response status:", error.response.status);
          console.log("Error response data:", error.response.data);
        } else if (error.request) {
          // The request was made but no response was received
          console.log("Error request:", error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error message:", error.message);
        }
      }
  };

  return (
    <MenContext.Provider value={{ menProducts,getSingleProduct,singleProduct }}>
      {children}
    </MenContext.Provider>
  );
};

export default MenContext;