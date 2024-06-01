"use client";

import { useEffect, useState } from "react";
import { foo1 } from "../actions";
import { useRouter } from "next/navigation";

export default function Footer() {
  const [dynamicServerValue, setDynamicServerValue] = useState("");
  const router = useRouter();

  useEffect(() => {
    const callServerAction = async () => {
      const result1 = await foo1("initial");
      setDynamicServerValue(result1);
    };

    callServerAction();
  }, []);

  const updateDynamicServerValue = async () => {
    const result1 = await foo1("afterClick");
    setDynamicServerValue(result1);
    setTimeout(() => {
      router.push("/profile");
    }, 1000);
  };

  return (
    <div>
      {/* <p>Home page client component start here</p>
      <p>
        Dynamic value from server action at client side is :{" "}
        {dynamicServerValue.name}
      </p> */}

      <button
        onClick={updateDynamicServerValue}
        style={{ margin: "10px", padding: "5px" }}
      >
        Goto Profile
      </button>
      {/* <CLink label="Learning Module" href={"/s/java"} /> */}
    </div>
  );
}
