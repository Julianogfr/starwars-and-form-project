import { Link } from "react-router-dom";
import React from "react";
import { useState } from "react";
import { getPersonas, getSpaceShips, getPlanet } from "../../service";
import "./index.css";

function Starwars() {
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const [persona, setPersona] = useState();
  const [personaSelect, setPersonaSelect] = useState(0);
  const Personas = async () => {
    setLoading(true);
    setDisabled(true);
    try {
      const data = await getPersonas(personaSelect);
      setPersona(data);
      setLoading(false);
      setDisabled(false);
    } catch (error) {
      setLoading(false);
      setDisabled(false);
    }
  };

  const [spaceships, setSpaceShips] = useState();
  const [spaceShipsSelect, setSpaceShipsSelect] = useState(0);
  const SpaceShips = async () => {
    setLoading(true);
    setDisabled(true);
    try {
      const data = await getSpaceShips(spaceShipsSelect);
      setSpaceShips(data);
      setLoading(false);
      setDisabled(false);
    } catch (error) {
      setLoading(false);
      setDisabled(false);
    }
  };

  const [planet, setPlanet] = useState();
  const [planetSelect, setPlanetSelect] = useState(0);
  const Planet = async () => {
    setLoading(true);
    setDisabled(true);
    try {
      const data = await getPlanet(planetSelect);
      setPlanet(data);
      setLoading(false);
      setDisabled(false);
    } catch (error) {
      setLoading(false);
      setDisabled(false);
    }
  };

  return (
    <div className="wrapper-page-starwars-main">
      <h1 className="main-tittle-starwars">star wars</h1>
      <div>
        <div className="container-persona-starwars">
          <input
            max={50}
            type="number"
            value={personaSelect}
            onChange={(event) => {
              setPersonaSelect(event.target.value);
            }}
          />
          <button
            className="generateButton-starwars"
            disabled={disabled}
            onClick={Personas}
          >
            {loading ? (
              <span className="isLoading-starwars">Loading...</span>
            ) : (
              "Get person"
            )}
          </button>
          <div className="atributtes-persona-starwars">
            <p><span className="atributtes-att">Name: </span>{persona?.name}</p>
            <p><span className="atributtes-att">Height(cm):</span> {persona?.height}</p>
            <p><span className="atributtes-att">Weight(kg):</span> {persona?.mass}</p>
          </div>
        </div>

        <div className="container-spaceships-starwars">
          <input
            max={50}
            type="number"
            value={spaceShipsSelect}
            onChange={(event) => {
              setSpaceShipsSelect(event.target.value);
            }}
          />
          <button
            className="generateButton-starwars"
            disabled={disabled}
            onClick={SpaceShips}
          >
            {loading ? (
              <span className="isLoading-starwars">Loading...</span>
            ) : (
              "Get spaceship"
            )}
          </button>
          <div className="atributtes-spaceships-starwars">
            <p><span className="atributtes-att">Name</span> {spaceships?.name}</p>
            <p><span className="atributtes-att">Model:</span> {spaceships?.model}</p>
            <p><span className="atributtes-att">Manufacturer:</span> {spaceships?.manufacturer}</p>
          </div>
        </div>

        <div className="container-planet-starwars">
          <input
            max={50}
            type="number"
            value={planetSelect}
            onChange={(event) => {
              setPlanetSelect(event.target.value);
            }}
          />
          <button
            className="generateButton-starwars"
            disabled={disabled}
            onClick={Planet}
          >
            {loading ? (
              <span className="isLoading-starwars">Loading...</span>
            ) : (
              "Get planet"
            )}
          </button>
          <div className="atributtes-planet-starwars">
            <p><span className="atributtes-att">Name:</span> {planet?.name}</p>
            <p><span className="atributtes-att">Rotation:</span> {planet?.rotation_period}</p>
            <p><span className="atributtes-att">Translation:</span> {planet?.orbital_period}</p>
          </div>
        </div>
      </div>
      <div>
        <Link to="/">
          <button className="homeandform-button-starwarspage">Home</button>
        </Link>
        <Link to="/form">
          <button className="homeandform-button-starwarspage">Form</button>
        </Link>
      </div>
      <div className="stars"></div>
    </div>
  );
}

export default Starwars;
