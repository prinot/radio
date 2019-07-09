-- phpMyAdmin SQL Dump
-- version 4.8.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 09-07-2019 a las 23:39:37
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
  `id_categoria` int(11) NOT NULL,
  `publicado` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `blog`
--

INSERT INTO `blog` (`id`, `redactor`, `titulo`, `portada`, `contenido`, `id_categoria`, `publicado`) VALUES
(7, '2', 'q', '1562022426_DIAGRAMA_3.png', '<p>This is some sample content.</p>', 1, '2019-07-09 13:53:06'),
(8, '2', 'Postnuevo', NULL, '<p>This is some sample content.</p>', 3, '2019-07-09 13:53:09'),
(9, '2', 'Postnuevo', NULL, '<p>This is some sample content.</p>', 0, '2019-07-08 22:16:20'),
(10, '2', 'Nuevo', NULL, '<p>This is some sample content.</p>', 0, '2019-07-08 22:17:47');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias`
--

CREATE TABLE `categorias` (
  `id` int(11) NOT NULL,
  `nombre` varchar(15) NOT NULL,
  `slug` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `categorias`
--

INSERT INTO `categorias` (`id`, `nombre`, `slug`) VALUES
(1, 'Música', ''),
(2, 'Variedades', ''),
(3, 'Tendencias', ''),
(4, 'Otros', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

CREATE TABLE `clientes` (
  `id` int(255) NOT NULL,
  `nombres` varchar(20) DEFAULT NULL,
  `apellidos` varchar(20) NOT NULL,
  `email` text,
  `clave` text,
  `pregunta` text,
  `respuesta` text,
  `foto` varchar(30) DEFAULT NULL,
  `fecha` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `clientes`
--

INSERT INTO `clientes` (`id`, `nombres`, `apellidos`, `email`, `clave`, `pregunta`, `respuesta`, `foto`, `fecha`) VALUES
(1, 'Franklin Rojas', '', 'franklin.rojas@leadsmarketing.mx', 'NmE0OGFiYjgzYjJlMTM0MWMxNjAzZjVmOTUxZjkxOWE=', 'Â¿GÃ©nero de mÃºsica favorita?', 'MTQ0Zjg2ZGI4MjY3MWY5ZDlhZmMyOGVhZmU1ZmI1NTc=', '', '2019-06-12 22:27:04'),
(2, 'Admin General', '', 'admin@leadsmarketing.mx', 'OGFiZGIwNWU1ZTE1MzJiNWUyZjVhOTFlMWNiZTcxOWE=', 'Â¿GÃ©nero de mÃºsica favorita?', 'MTQ0Zjg2ZGI4MjY3MWY5ZDlhZmMyOGVhZmU1ZmI1NTc=', '', NULL),
(3, 'Jose', 'Arenas', 'arenas782@gmail.com', '79f1b45787833e3ac9fcfd392294823c3c30ee28eff75c86f876f4750b2afdfdf00e9c67f2518cfebbfcdd4eca8576a9a849824606550c9055c69c9898cd8c503qXfPJJO6Glx0xWvhsZ6g6u3b/nKbms7iBdiBXWpD7k=', 'pregunta', 'respuesta', '1562701686_7ce95cef-5.jpg', '2019-07-09 19:48:06');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comentarios`
--

CREATE TABLE `comentarios` (
  `id` int(11) NOT NULL,
  `id_cliente` int(11) NOT NULL,
  `id_post` int(11) NOT NULL,
  `texto` varchar(255) NOT NULL,
  `fecha` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `comentarios`
--

INSERT INTO `comentarios` (`id`, `id_cliente`, `id_post`, `texto`, `fecha`) VALUES
(1, 1, 10, 'comentario de prueba\r\n', '2019-07-09 18:45:42'),
(2, 2, 10, 'Segundo comentario', '2019-07-09 18:59:47'),
(3, 3, 10, 'Texto de pruebas\r\n', '2019-07-09 19:48:49'),
(4, 3, 7, 'Comentario nuevo', '2019-07-09 20:53:00'),
(6, 3, 7, 'nuevo  comentario', '2019-07-09 21:02:42');

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
-- Estructura de tabla para la tabla `post_tags`
--

CREATE TABLE `post_tags` (
  `id` int(11) NOT NULL,
  `id_post` int(11) NOT NULL,
  `id_tag` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `post_tags`
--

INSERT INTO `post_tags` (`id`, `id_post`, `id_tag`) VALUES
(3, 10, 1),
(4, 10, 2),
(5, 10, 3),
(6, 7, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tags`
--

CREATE TABLE `tags` (
  `id` int(11) NOT NULL,
  `tag` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `tags`
--

INSERT INTO `tags` (`id`, `tag`) VALUES
(1, 'Música'),
(2, 'Variedades'),
(3, 'Otros');

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
(8, 'nuevo', 'nuevo@nuevo.nuevo', '79a4f0835f7b6bba3b2ee9e6be1751d30615d28b57ac4393c82e94e787401bb8ac856d2f19d4e3635e598ed7c763182a9ab775a928821c42551443a14c806861tChIkfPR5TGeEgurtn34JvDxxnIrhH3yX97iXtgys9k=', 'admin', 'nuevo', 'nuevo', 'avatars/avatar12.png', '2019-07-01 22:59:47'),
(9, 'Belleza', NULL, NULL, NULL, NULL, NULL, NULL, '2019-07-09 14:59:40');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `blog`
--
ALTER TABLE `blog`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_categoria` (`id_categoria`);

--
-- Indices de la tabla `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_post` (`id_post`),
  ADD KEY `id_cliente` (`id_cliente`);

--
-- Indices de la tabla `dedicatorias`
--
ALTER TABLE `dedicatorias`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `post_tags`
--
ALTER TABLE `post_tags`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_post` (`id_post`),
  ADD KEY `id_tag` (`id_tag`);

--
-- Indices de la tabla `tags`
--
ALTER TABLE `tags`
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
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `categorias`
--
ALTER TABLE `categorias`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `clientes`
--
ALTER TABLE `clientes`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `dedicatorias`
--
ALTER TABLE `dedicatorias`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `post_tags`
--
ALTER TABLE `post_tags`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `tags`
--
ALTER TABLE `tags`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `blog`
--
ALTER TABLE `blog`
  ADD CONSTRAINT `blog_ibfk_1` FOREIGN KEY (`id_categoria`) REFERENCES `categorias` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `comentarios`
--
ALTER TABLE `comentarios`
  ADD CONSTRAINT `comentarios_ibfk_1` FOREIGN KEY (`id_post`) REFERENCES `blog` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `comentarios_ibfk_2` FOREIGN KEY (`id_cliente`) REFERENCES `clientes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `post_tags`
--
ALTER TABLE `post_tags`
  ADD CONSTRAINT `post_tags_ibfk_1` FOREIGN KEY (`id_post`) REFERENCES `blog` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `post_tags_ibfk_2` FOREIGN KEY (`id_tag`) REFERENCES `tags` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
