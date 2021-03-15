-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 09-03-2021 a las 00:15:32
-- Versión del servidor: 10.4.16-MariaDB
-- Versión de PHP: 7.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

--
-- Base de datos: `banco`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cliente`
--

CREATE TABLE `cliente` (
  `dni` varchar(9) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `apellidos` varchar(255) NOT NULL,
  `direccion` varchar(255) NOT NULL,
  `localidad` varchar(100) NOT NULL,
  `fNacimiento` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `cliente`
--

INSERT INTO `cliente` (`dni`, `nombre`, `apellidos`, `direccion`, `localidad`, `fNacimiento`) VALUES
('84965587E', 'Maria', 'González', 'Calle Almeria 5', 'Villanueva', '1992-03-20');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cuenta`
--

CREATE TABLE `cuenta` (
  `iban` varchar(24) NOT NULL,
  `dni` varchar(9) NOT NULL,
  `saldo` float NOT NULL,
  `interesAnual` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `cuenta`
--

INSERT INTO `cuenta` (`iban`, `dni`, `saldo`, `interesAnual`) VALUES
('ES0000000000000000000', '84965587E', 3500, 3.5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `movimiento`
--

CREATE TABLE `movimiento` (
  `tiempo` timestamp NOT NULL DEFAULT current_timestamp(),
  `iban` varchar(24) NOT NULL,
  `tipo` varchar(10) NOT NULL,
  `cantidad` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `movimiento`
--

INSERT INTO `movimiento` (`tiempo`, `iban`, `tipo`, `cantidad`) VALUES
('2021-03-08 22:36:44', 'ES0000000000000000000', 'ingreso', 40000),
('2021-03-08 22:22:16', 'ES0000000000000000000', 'intereses', 40.75),
('2021-03-08 22:28:06', 'ES0000000000000000000', 'intereses', 48.30),
('2021-03-08 23:38:29', 'ES0000000000000000000', 'intereses', 58.00);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `cliente`
--
ALTER TABLE `cliente`
  ADD PRIMARY KEY (`dni`);

--
-- Indices de la tabla `cuenta`
--
ALTER TABLE `cuenta`
  ADD PRIMARY KEY (`iban`),
  ADD KEY `dni_fk` (`dni`);

--
-- Indices de la tabla `movimiento`
--
ALTER TABLE `movimiento`
  ADD PRIMARY KEY (`tiempo`),
  ADD KEY `iban_fk` (`iban`);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `cuenta`
--
ALTER TABLE `cuenta`
  ADD CONSTRAINT `dni_fk` FOREIGN KEY (`dni`) REFERENCES `cliente` (`dni`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `movimiento`
--
ALTER TABLE `movimiento`
  ADD CONSTRAINT `iban_fk` FOREIGN KEY (`iban`) REFERENCES `cuenta` (`iban`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

