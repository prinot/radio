-- phpMyAdmin SQL Dump
-- version 4.8.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 02-07-2019 a las 01:20:13
-- Versión del servidor: 10.1.32-MariaDB
-- Versión de PHP: 5.6.36

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `radio`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `blog`
--

CREATE TABLE `blog` (
  `id` int(255) NOT NULL,
  `redactor` text,
  `titulo` text,
  `portada` text,
  `contenido` longtext,
  `publicado` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `blog`
--

INSERT INTO `blog` (`id`, `redactor`, `titulo`, `portada`, `contenido`, `publicado`) VALUES
(7, '2', 'q', '1562022426_DIAGRAMA_3.png', '<p>This is some sample content.</p>', '2019-07-01 23:07:06');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

CREATE TABLE `clientes` (
  `id` int(255) NOT NULL,
  `nombre` text,
  `email` text,
  `clave` text,
  `pregunta` text,
  `respuesta` text,
  `fecha` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `clientes`
--

INSERT INTO `clientes` (`id`, `nombre`, `email`, `clave`, `pregunta`, `respuesta`, `fecha`) VALUES
(1, 'Franklin Rojas', 'franklin.rojas@leadsmarketing.mx', 'NmE0OGFiYjgzYjJlMTM0MWMxNjAzZjVmOTUxZjkxOWE=', 'Â¿GÃ©nero de mÃºsica favorita?', 'MTQ0Zjg2ZGI4MjY3MWY5ZDlhZmMyOGVhZmU1ZmI1NTc=', '2019-06-12 18:27:04'),
(2, 'Admin General', 'admin@leadsmarketing.mx', 'OGFiZGIwNWU1ZTE1MzJiNWUyZjVhOTFlMWNiZTcxOWE=', 'Â¿GÃ©nero de mÃºsica favorita?', 'MTQ0Zjg2ZGI4MjY3MWY5ZDlhZmMyOGVhZmU1ZmI1NTc=', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `dedicatorias`
--

CREATE TABLE `dedicatorias` (
  `id` int(255) NOT NULL,
  `cliente` text,
  `cancion` text,
  `artista` text,
  `dedicatoria` text,
  `fecha` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(255) NOT NULL,
  `nombre` text,
  `email` text,
  `clave` text,
  `rol` text,
  `pregunta` text,
  `respuesta` text,
  `avatar` varchar(30) DEFAULT NULL,
  `fecha` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `nombre`, `email`, `clave`, `rol`, `pregunta`, `respuesta`, `avatar`, `fecha`) VALUES
(2, 'Admin General', 'admin@leadsmarketing.mx', 'e71effcca7a0d84bfb3b335d24a19e9cf420cd42020e4f964e537639687a65c2ff76de0c9460623a586f85c4dff337da8b478c9b0c2adf34367e32e8999eb4f1zfRelUvRH1tOASkPso+EgBfFjm6VEIu8B0ftWkH/Ds0=', 'admin', 'Â¿Cual es mi rol?', 'administrador general', 'avatars/avatar1.png', '2019-07-01 23:01:49'),
(3, 'Jose Alejandro Arenas', 'admin@a.com', 'f748f42d9539b952a4b7a3b9c17f43ad791161dd3f5d56c01391ea69beaeb3e190ccb96061d392c9c23a57b1246b33b7b675bf325e831d4b7694546e37b1f9e4FzjebCv6UGRrayrbN5rppsRoe7ViTkgn5+cKfEnrFGg=', 'admin', 'pregunta', 'respuesta', NULL, '2019-07-01 20:51:08'),
(6, 'pedro', 'q@q.q', '6d13432275622f7f03070da1a6222736d13e9e466b9377fd47140770316c6784ca68d312c0ce9dd784a788df8145f19ac7ef555ec42fbc69830f0656ec9e0248akdK0+6Ply92aDeVcS+HSXYm/MsSQXhMuPUQW9C11xw=', 'admin', 'preguntica', 'respuestica', 'avatars/avatar12.png', '2019-07-01 21:46:13'),
(7, 'moderador', 'm@m.m', '8b532efd82c956c3331f5f86986c05e6929f2c998443a24752c27aac583ec77b59abe0eef608e0de1b03f7def0128e0bc73b11d872d9fa08e475bb0bae00ac0dTLvCDDD77sCdUFulbvtdun4+jFMIRmHn/kfmpGMVTdo=', 'mod', 'm', 'm', 'avatars/avatar11.png', '2019-07-01 22:44:22'),
(8, 'nuevo', 'nuevo@nuevo.nuevo', '79a4f0835f7b6bba3b2ee9e6be1751d30615d28b57ac4393c82e94e787401bb8ac856d2f19d4e3635e598ed7c763182a9ab775a928821c42551443a14c806861tChIkfPR5TGeEgurtn34JvDxxnIrhH3yX97iXtgys9k=', 'admin', 'nuevo', 'nuevo', 'avatars/avatar12.png', '2019-07-01 22:59:47');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `blog`
--
ALTER TABLE `blog`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `dedicatorias`
--
ALTER TABLE `dedicatorias`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `blog`
--
ALTER TABLE `blog`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `clientes`
--
ALTER TABLE `clientes`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `dedicatorias`
--
ALTER TABLE `dedicatorias`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
