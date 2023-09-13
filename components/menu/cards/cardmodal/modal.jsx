import Image from "next/image";
import { Calculator } from "../calculator/cal";
import stl from "./modal.module.scss";
import { Exit } from "../../../icons/exit";
import { Radio, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Checkbox } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/components/store/slices/products";

export const MyModal = ({ setModal, data, open }) => {
  const [num, setNum] = useState(1);

  const [properties, setProperties] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  useEffect(() => {
    if (data.options) {
      const res = data.options.find((item) => item.type === "radio");
      if (res && res.properties) {
        setProperties([
          {
            ...res.properties[0],
            type: res.type,
          },
        ]);
      }
    }
  }, []);

  const checkPropery = (id, type) => {
    const item = properties.find(
      (item) => item.id === id && item.type === type
    );
    return !!item;
  };

  const addProperty = (data, type) => {
    if (type === "radio") {
      const items = properties.filter((item) => item.type !== "radio");
      setProperties([
        ...items,
        {
          ...data,
          type,
        },
      ]);
    }
    if (type === "checkbox") {
      const item = properties.find(
        (val) => val.id === data.id && val.type === type
      );

      if (item) {
        const items = properties.filter((val) => val.id !== data.id);

        setProperties([...items]);
      } else {
        setProperties((prev) => [
          ...prev,
          {
            ...data,
            type,
          },
        ]);
      }
    }
  };

  const calculateProductPrice =
    properties.length > 0
      ? properties.reduce((total, property) => total + property?.price, 0)
      : 0;

  const handelClick = () => {
    setModal(false);
    dispatch(
      addToCart({
        properties,
        quantity: num,
        data,
        price: calculateProductPrice * num,
        productId: new Date().valueOf(),
      })
    );
  };
  return (
    <ChakraProvider>
      <div onClick={() => setModal(false)} className={stl.wrp}>
        <div onClick={(e) => e.stopPropagation()} className={stl.modal}>
          <div className={stl.left}>
            <Image src={data.img} alt={data.food_type} />
          </div>
          <div className={stl.right}>
            <button onClick={() => setModal(false)} className={stl.exit}>
              <Exit />
            </button>
            <div className={stl.rightHeader}>
              <h3>{data.name}</h3>
              <p>{data.description}</p>
            </div>
            {data?.options?.map((el, i) => (
              <div className={stl.radio}>
                <h3>{el.label}</h3>
                {el.type === "checkbox" ? (
                  el?.properties?.map((data) => (
                    <Checkbox
                      onChange={() => addProperty(data, el.type)}
                      isChecked={checkPropery(data.id, el.type)}
                    >
                      {data.name}{" "}
                      <span className={stl.price}>
                        {" "}
                        +{data?.price.toLocaleString("cs-CZ")} сум
                      </span>
                    </Checkbox>
                  ))
                ) : (
                  <Stack direction="column">
                    {el?.properties?.map((data) => (
                      <Radio
                        isChecked={checkPropery(data.id, el.type)}
                        colorScheme="blue"
                        onChange={() => addProperty(data, el.type)}
                      >
                        {data.name}{" "}
                        <span className={stl.price}>
                          +{data?.price.toLocaleString("cs-CZ")} сум
                        </span>
                      </Radio>
                    ))}
                  </Stack>
                )}
              </div>
            ))}

            <div className={stl.modalButton}>
              <Calculator num={num} setNum={setNum} />
              <button onClick={handelClick} className={stl.addButton}>
                Добавить {(calculateProductPrice * num).toLocaleString("cs-CZ")}
                сум
              </button>
            </div>
          </div>
        </div>
      </div>
    </ChakraProvider>
  );
};
