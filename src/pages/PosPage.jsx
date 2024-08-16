import React, { useEffect, useState } from "react";
import Container from "../container/Container";
import { useGetDataQuery } from "../store/service/ApiEndpoints";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";

import { Button } from "../components/ui/button";

const PosPage = () => {
  const { data, isLoading } = useGetDataQuery();

  const [cart, setCart] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (cart.length === 1) {
      setOpen(true);
    }
  }, [cart]);

  const handleAdd = (product) => {
    const isProductInCart = cart.find((i) => i.id === product.id);

    if (isProductInCart) {
      let newCart = [];
      let newItem;

      cart.forEach((cartItem) => {
        if (cartItem.id === product.id) {
          newItem = {
            ...cartItem,
            quantity: cartItem.quantity + 1,
            total: cartItem.price * (cartItem.quantity + 1),
          };
          newCart.push(newItem);
        } else {
          newCart.push(cartItem);
        }
      });

      setCart(newCart);
    } else {
      let addingProduct = {
        ...product,
        quantity: 1,
        total: product.price,
      };

      setCart([...cart, addingProduct]);
    }
  };

  const handleDelete = (id) => {
    setCart(cart.filter((i) => i.id != id));
  };
  const handleDraw = () => {
    setOpen(!open);
  };
  const editQuantity = (id, quantity) => {
    setCart(
      cart.map((i) => {
        if (i.id === id) {
          const newQuantity = i.quantity + quantity;
          const newTotal = i.price * newQuantity;
          return { ...i, quantity: newQuantity, total: newTotal };
        } else return i;
      })
    );
  };

  return (
    <Container>
      <div>
        {isLoading ? (
          "Loading..."
        ) : (
          <div className="flex">
            <div className="flex gap-3 flex-wrap justify-center">
              {data.map((i, key) => (
                <div key={key} className="w-[300px] border p-2 rounded-lg">
                  <p className="text-lg font-semibold">{i.name}</p>
                  <img src={i.image} alt={i.name} />
                  <p className="text-lg my-2">${i.price}</p>
                  <button
                    onClick={() => handleAdd(i)}
                    className="bg-blue-950 text-white p-3 rounded-lg w-full hover:bg-blue-900 active:bg-gray-400"
                  >
                    Add
                  </button>
                </div>
              ))}
            </div>
            <div>
              {!open ? (
                <button
                  onClick={handleDraw}
                  className="fixed inset-y-0 right-0 flex items-center text-3xl mr-2  hover:text-gray-700 "
                >
                  <MdOutlineKeyboardDoubleArrowLeft />
                </button>
              ) : (
                <div className="fixed inset-y-0 right-0 flex flex-col  border w-[450px] bg-slate-100 p-2 gap-3">
                  <h1 className="text-2xl font-bold">Products in Cart</h1>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                  </p>
                  <table className="border rounded-lg mb-16">
                    <thead className="bg-gray-500 border">
                      <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th>Action</th>
                      </tr>
                    </thead>

                    <tbody>
                      {cart.length > 0 ? (
                        cart.map((cartProduct, key) => (
                          <tr key={key} className="">
                            <td className="text-center ">{cartProduct.id}</td>
                            <td className="text-center">{cartProduct.name}</td>
                            <td className="text-center">
                              $ {cartProduct.price}
                            </td>
                            <td className="text-center">
                              <button
                                onClick={() =>
                                  cartProduct.quantity > 1 &&
                                  editQuantity(cartProduct.id, -1)
                                }
                                className="border border-black hover:bg-slate-200 px-2 mr-1 bg-slate-100"
                              >
                                -
                              </button>{" "}
                              {cartProduct.quantity}
                              <button
                                onClick={() => editQuantity(cartProduct.id, 1)}
                                className="border border-black hover:bg-slate-200 px-2  bg-slate-100 ml-1"
                              >
                                +
                              </button>{" "}
                            </td>
                            <td className="text-center">
                              $ {cartProduct.total}
                            </td>
                            <td className="text-center">
                              <button
                                className="bg-red-600 p-1 rounded-lg hover:bg-red-500 text-white"
                                onClick={handleDelete.bind(
                                  null,
                                  cartProduct.id
                                )}
                              >
                                Remove
                              </button>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr className="">
                          <td colSpan="6" className="text-center my-2 py-4">
                            No item in cart.
                          </td>
                        </tr>
                      )}
                    </tbody>

                    <tfoot className="bg-gray-500">
                      <tr>
                        <td colSpan={4} className="font-bold pl-4">
                          Total
                        </td>
                        <td className="col-span-2 text-center">
                          ${" "}
                          {cart.reduce((pv, cv) => pv + parseInt(cv.total), 0)}
                        </td>
                        <td></td>
                      </tr>
                    </tfoot>
                  </table>
                  <div className="mt-52 w-full mb-4 ">
                    <Button variant="outline" className="w-full mb-4 z-50">
                      Print
                    </Button>

                    <Button
                      onClick={handleDraw}
                      className="w-full text-white z-20"
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </Container>
  );
};

export default PosPage;
