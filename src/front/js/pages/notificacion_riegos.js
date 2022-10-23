import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/notificacion_riegos.css";
import { Card } from "../component/card";
import { ModalCard } from "../component/modal";
import riego from "../../img/riego.png";

export const Notificaciones_riego = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => actions.getMessage("plants"), []);
  console.log(store.seccion);
  let filtrado = store.seccion.filter((object) => object.tipo === "Interior");
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-7 p-5">
          <h1 className="title-notificacion-riegos">Notificamos tus riegos</h1>
          <h5>
            Conocemos las necesidades de riego de cada planta y te avisamos
            directamente a tu movil para que no olvides regarla.
          </h5>
          <h5 className="pt-3">
            Puedes recibir tus notificaciones de dos formas:
          </h5>
          <div className="mt-3 google-telegram-title">
            <img
              src="https://logos-world.net/wp-content/uploads/2021/03/Google-Calendar-Logo.png"
              className="icono_google"
            ></img>{" "}
            <h3> Google Calendar:</h3>
          </div>
          <h5 className="mt-2">
            Añade a Google Calendar tus plantas y agendaremos un evento
            automaticamente en tu calendario.
          </h5>
          <div className="mt-3 google-telegram-title">
            <img
              src="https://cdn-icons-png.flaticon.com/512/185/185977.png"
              className="icono_telegram me-2"
            ></img>
            <h3>Telegram: </h3>
          </div>
          <h5 className="mt-2">
            Agrega nuestro Bot de Telegram y te notificaremos mediante un
            mensaje.
            <h4 className="m-3">Instrucciones:</h4>
            Abre telegram en tu teléfono y busca Greencornerproyect_bot. Pulsa
            Start y envíanos un mensaje con el mismo correo que has usado en
            nuestra página, después en la sección "Mis plantas" agrega las que
            quieras que te notifiquemos.
          </h5>
        </div>
        <div className="col-md-5">
          <img src={riego} className="img-fluid"></img>
        </div>
      </div>
    </div>
  );
};
