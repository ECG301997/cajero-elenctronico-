-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 14-12-2022 a las 23:14:52
-- Versión del servidor: 10.4.25-MariaDB
-- Versión de PHP: 8.0.23

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `cajeropoli`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `movieentos`
--

CREATE TABLE `movieentos` (
  `id` int(11) NOT NULL,
  `saldo` int(11) NOT NULL,
  `fecha` varchar(20) NOT NULL,
  `documento` varchar(20) NOT NULL,
  `tipoMov` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `movieentos`
--

INSERT INTO `movieentos` (`id`, `saldo`, `fecha`, `documento`, `tipoMov`) VALUES
(1, 6000, '1670205133', '1000698949', 'retiro'),
(2, 4000, '1670205203', '1000698949', 'retiro'),
(3, 2000, '1670205310', '1000698949', 'retiro'),
(4, 2000, '1670205313', '1000698949', 'retiro'),
(5, 2000, '1670205820', '1000698949', 'consignacion'),
(6, 2000, 'getdate()', '1000698949', 'consignacion'),
(7, 2000, 'Sun Dec 04', '1000698949', 'consignacion'),
(8, 2000, '1670206278', '1000698949', 'consignacion'),
(9, 2000, 'function g', '1000698949', 'consignacion'),
(10, 2000, '2022', '1000698949', 'consignacion'),
(11, 2000, 'Sun Dec 04', '1000698949', 'consignacion'),
(12, 2000, '\" 04/Dec/2', '1000698949', 'consignacion'),
(13, 2000, '\" 04/Dec/2022 ', '1000698949', 'consignacion'),
(14, 2000, ' 04/Dec/2022 ', '1000698949', 'consignacion'),
(15, 200, ' 05/Dec/2022 ', '1000698949', 'consignacion'),
(16, 1, ' 05/Dec/2022 ', '1000698949', 'consignacion'),
(17, 100, ' 05/Dec/2022 ', '1000698949', 'consignacion'),
(18, 100, ' 05/Dec/2022 ', '1000698949', 'consignacion'),
(19, 100, ' 05/Dec/2022 ', '1000698947', 'consignacion'),
(20, 100, ' 06/Dec/2022 ', '1000698947', 'consignacion'),
(21, 200, ' 06/Dec/2022 ', '1000698949', 'consignacion'),
(22, 52222, ' 06/Dec/2022 ', '1000698947', 'consignacion'),
(23, 2000, ' 06/Dec/2022 ', '1000698949', 'consignacion'),
(24, 20000, '1670364700589', '1000698949', 'retiro'),
(25, 15156, ' 06/Dec/2022 ', '1000698947', 'retiro'),
(26, 10000, ' 06/Dec/2022 ', '1000698947', 'consignacion'),
(27, 10000, ' 06/Dec/2022 ', '1000698947', 'retiro'),
(28, 2000, ' 06/Dec/2022 ', '1000698949', 'retiro'),
(29, 20000, ' 06/Dec/2022 ', '1000698949', 'consignacion'),
(30, 37266, ' 06/Dec/2022 ', '1000698947', 'retiro'),
(31, 200, ' 06/Dec/2022 ', '1000698947', 'consignacion'),
(32, 2000, ' 08/Dec/2022 ', '1000698949', 'consignacion'),
(33, 2000, ' 14/Dec/2022 ', '1234567892', 'consignacion');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombres` varchar(200) NOT NULL,
  `correo` varchar(200) NOT NULL,
  `contraseña` varchar(2000) NOT NULL,
  `documento` varchar(20) NOT NULL,
  `saldo` int(11) NOT NULL,
  `tipoUser` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombres`, `correo`, `contraseña`, `documento`, `saldo`, `tipoUser`) VALUES
(7, 'eduardo', 'eduardoo@gmail.com', '$2a$08$7RIxjULGSyk4JIFRV.ZqTuMJuEuboy1OU/oZ5egoL6Whu7QRF1zBa', '1000698949', 26601, 'user'),
(8, 'admin', 'admin@gmail.com', '$2a$08$ZX3NLxAdmJs95x2qyP7mDevx73J4ec9GhUaqu.Pbp6E7aLzUMPVmi', '1000698947', 200, 'admin'),
(9, 'user', 'user@gmail.com', '$2a$08$P8xWmB18z.IuGcI0bDfPzeem1GrPE6OGGuAzyouYSnBNDE7.5epp2', '1000698945', 0, 'user'),
(10, 'santiago', 'santiago@gmail.com', '$2a$08$rFAv1uyRXGBCM9oVl0lBWO/ZfOTRNSf.2wMcB5MoY8LsCymoP2Aa2', '12345678910', 0, ''),
(11, 'prueba', 'prueba@gmail.com', '$2a$08$Cq79maprtYIzUh1QG4eOqORtEtq4YMaIYm43QubHp2fBYPkFltAEO', '1234567892', 2000, 'admin');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `movieentos`
--
ALTER TABLE `movieentos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `movieentos`
--
ALTER TABLE `movieentos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
