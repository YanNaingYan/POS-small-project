import React from "react";
import { Link } from "react-router-dom";
import { LiaShoppingBagSolid } from "react-icons/lia";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../components/ui/drawer";
import { Button } from "../components/ui/button";

const Container = ({ children }) => {
  return (
    <div>
      <nav className="bg-blue-950 p-6 mb-4 flex justify-between">
        <Link to="/" className="text-white">
          POS Project
        </Link>
      </nav>

      <div className="w-[80%] mx-auto">{children}</div>
    </div>
  );
};

export default Container;
