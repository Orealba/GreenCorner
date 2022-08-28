import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Card } from "../component/card";
import { ModalCard } from "../component/modal";

export const Exterior = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => actions.getMessage("plants"), []);
  let filtrado = store.seccion.filter((object) => object.tipo === "Exterior");
  return (
    <div style={{ minHeight: "800px" }}>
      <div className="container-fluid  mb-xs-1 mb-5 mt-4">
        <div className="row d-flex justify-content-center">
          {filtrado.map((obj, index) => {
            return (
              <>
                <Card
                  name={obj.nombre_comun}
                  id={obj.id}
                  i={index}
                  img={obj.imagen}
                />
                <ModalCard estado={store.modal.estado}></ModalCard>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};
