import React from "react";
import { render, fireEvent, getByDisplayValue } from "@testing-library/react";
import ShoppingCart from "./ShoppingCart";

const plants = [
    {
        description: "oh haha this is a trick",
        id: 1324,
        img: "https://cdn.shopify.com/s/files/1/2781/9558/products/PEPEROMIA_ROSSO-1_800x.png?v=1587156590",
        light: "direct",
        name: "Rare Flower",
        price: 30,
        scientificName: "TreckisLolis",
        watering: 19
    }, 
    {
        description: "trilloplant",
        id: 13287,
        img: "https://cdn.shopify.com/s/files/1/2781/9558/products/6__SANSEVIERIA_ZEYLANICA-1_800x.png?v=1587146468",
        light: "direct",
        name: "Common Flower",
        price: 2,
        scientificName: "DuplimonisLolis",
        watering: 1000
    }, 
    {
        description: "wow what a short desc",
        id: 18724,
        img: "https://cdn.shopify.com/s/files/1/2781/9558/products/6__SANSEVIERIA_ZEYLANICA-1_800x.png?v=1587146468",
        light: "direct",
        name: "Unique Flower",
        price: 2,
        scientificName: "DuplimonisLolis",
        watering: 1000
    }
] 


test("displays plants in cart", () => {
    const { getByText } = render(<ShoppingCart cart={plants} />)

    const plantOneTitle = getByText(/rare flower/i)
    expect(plantOneTitle).toBeInTheDocument();

    const plantTwoTitle = getByText(/common flower/i)
    expect(plantTwoTitle).toBeInTheDocument();

    const plantThreeTitle = getByText(/unique flower/i)
    expect(plantThreeTitle).toBeInTheDocument();

})