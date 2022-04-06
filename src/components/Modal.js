import React from "react";
import "./styles.css";

function Modal({ setOpenModal, todoItem }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="title">
          <h1>{todoItem.text}</h1>
        </div>
        <form>
          <div className="user">
            <div
              class="btn-group"
              role="group"
              aria-label="Basic radio toggle button group"
            >
              <input
                type="radio"
                class="btn-check"
                name="btnradio"
                id="btnradio1"
                autocomplete="off"
              />
              <label class="btn btn-outline-primary" for="btnradio1">
                15min
              </label>

              <input
                type="radio"
                class="btn-check"
                name="btnradio"
                id="btnradio2"
                autocomplete="off"
              />
              <label class="btn btn-outline-primary" for="btnradio2">
                1h
              </label>

              <input
                type="radio"
                class="btn-check"
                name="btnradio"
                id="btnradio3"
                autocomplete="off"
              />
              <label class="btn btn-outline-primary" for="btnradio3">
                2h
              </label>
              <input
                type="radio"
                class="btn-check"
                name="btnradio"
                id="btnradio4"
                autocomplete="off"
              />
              <label class="btn btn-outline-primary" for="btnradio4">
                4h
              </label>
            </div>
            <input
              type="text"
              class="form-control"
              id="recipient-name"
              placeholder="Imie Nazwisko"
            />
            <button type="button" class="btn btn-primary">
              Przypisz
            </button>
          </div>
          <div className="commentInput">
            <input
              type="text"
              class="form-control"
              id="recipient-name"
              placeholder="Nieobowiazkowy komentarz"
            />
            <button type="button" class="btn btn-primary">
              Zostaw komentarz
            </button>
          </div>
        </form>
        <div className="envContainer">
          <div className="envInfo">
            <div className="envEntry">envInfo</div>
          </div>
          <div className="comments">comments</div>
        </div>
        <div className="historyContainer"></div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
