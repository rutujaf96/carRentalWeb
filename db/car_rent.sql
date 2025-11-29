-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 06, 2024 at 09:45 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `car_rent`
--

-- --------------------------------------------------------

--
-- Table structure for table `about_our_program`
--

CREATE TABLE `about_our_program` (
  `about_our_program_id` int(11) NOT NULL,
  `about_our_program_title` varchar(200) DEFAULT NULL,
  `about_our_program_desc` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `about_our_program`
--

INSERT INTO `about_our_program` (`about_our_program_id`, `about_our_program_title`, `about_our_program_desc`) VALUES
(1, '10', 'Major Cities are covered by us'),
(4, '0', 'Vehicles Fleet'),
(5, '0', 'Years of experience with 10,000+ happy customers & counting'),
(7, '4', '4.4 Rated App on Google Playstore');

-- --------------------------------------------------------

--
-- Table structure for table `about_performance`
--

CREATE TABLE `about_performance` (
  `about_performance_id` int(11) NOT NULL,
  `about_performance_title` varchar(200) DEFAULT NULL,
  `about_performance_desc` varchar(200) DEFAULT NULL,
  `about_performance_image1` varchar(200) DEFAULT NULL,
  `about_performance_image2` varchar(200) DEFAULT NULL,
  `about_performance_image3` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `about_performance`
--

INSERT INTO `about_performance` (`about_performance_id`, `about_performance_title`, `about_performance_desc`, `about_performance_image1`, `about_performance_image2`, `about_performance_image3`) VALUES
(4, 'Performance', 'Our performance determines your performance. Which is why we break milestones and set new benchmarks. We keep going till we optimize every car. That is how we keep your experience with Tata Motors New', '1712376418924per_car1.webp', '1712376727586per_car2.webp', 'performanse1712376648136per_car3.webp');

-- --------------------------------------------------------

--
-- Table structure for table `about_story`
--

CREATE TABLE `about_story` (
  `about_story_id` int(11) NOT NULL,
  `about_story_title1` varchar(200) DEFAULT NULL,
  `about_story_title2` varchar(200) DEFAULT NULL,
  `about_story_desc` varchar(1000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `about_story`
--

INSERT INTO `about_story` (`about_story_id`, `about_story_title1`, `about_story_title2`, `about_story_desc`) VALUES
(2, 'Brand Story', 'About Our Car Collection', '                                         At Tata Motors, it is not about a new car it is about a new experience. We constantly strive for happy drives and beautiful journeys. We bring innovation to categories and new life to old icons. We evolve every day, taking pride in our style and your safety. We assure you a drive that stays New Forever. Welcome to Tata Motors.\r\n                \r\n                \r\n                ');

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `admin_id` int(11) NOT NULL,
  `email` varchar(200) DEFAULT NULL,
  `password` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`admin_id`, `email`, `password`) VALUES
(7, 'admin@gmail.com', '$2b$10$7Vtxoq0S7pHE8r53rRNOQO594FmsXSzkFFAnt3hDlDmR3bIokR4Va');

-- --------------------------------------------------------

--
-- Table structure for table `basic_information`
--

CREATE TABLE `basic_information` (
  `basic_information_id` int(11) NOT NULL,
  `contact_heading` text DEFAULT NULL,
  `contact_number` varchar(15) DEFAULT NULL,
  `email` varchar(200) DEFAULT NULL,
  `facebook_link` varchar(500) DEFAULT NULL,
  `instagram_link` varchar(500) DEFAULT NULL,
  `twitter_link` text DEFAULT NULL,
  `linkedin_link` text DEFAULT NULL,
  `google_map_link` text DEFAULT NULL,
  `address` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `basic_information`
--

INSERT INTO `basic_information` (`basic_information_id`, `contact_heading`, `contact_number`, `email`, `facebook_link`, `instagram_link`, `twitter_link`, `linkedin_link`, `google_map_link`, `address`) VALUES
(1, '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe             dolorum adipisci recusandae praesentium dicta!', '07666806174', 'panditv0512@gmail.com', 'https://facebook.com', 'https://instagram.com', 'https://twitter.com', 'https://linkedin.com', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60220.857132446654!2d74.99625414704548!3d19.377656215164993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb6118a118def1%3A0x1781f16836921ed3!2sDedgaon%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1704259635900!5m2!1sen!2sin', 'DEDGAON TAL NEVASA DIST AHMEDNAGAR');

-- --------------------------------------------------------

--
-- Table structure for table `booked_car`
--

CREATE TABLE `booked_car` (
  `book_car_id` int(11) NOT NULL,
  `customer_name` text DEFAULT NULL,
  `customer_mobile` varchar(15) DEFAULT NULL,
  `pick_place` text DEFAULT NULL,
  `drop_place` text DEFAULT NULL,
  `pick_date` text DEFAULT NULL,
  `pick_time` text DEFAULT NULL,
  `car_name` text DEFAULT NULL,
  `car_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `booked_car`
--

INSERT INTO `booked_car` (`book_car_id`, `customer_name`, `customer_mobile`, `pick_place`, `drop_place`, `pick_date`, `pick_time`, `car_name`, `car_id`) VALUES
(1, 'Madan Ghodechor', '9309804106', 'Ahilyanager', 'a2z Infotech', '2024-03-29', '11:00', 'Maruti Alto 800', 15),
(2, 'Ronit Solunke', '9665620374', 'Ahilyanager', 'a2z Infotech', '2024-03-29', '10:00', 'Ford Aspire', 6),
(3, 'Madan Ghodechor', '9309804106', 'Ahilyanager', 'a2z Infotech', '2024-03-29', '10:57', 'Hyundai i10 Nios (CNG) ', 12),
(4, 'prashant magar', '9665620374', 'Ahilyanager', 'a2z Infotech', '2024-04-02', '11:00', 'Maruti Ertiga', 10),
(5, 'Ronit Solunke', '9309804106', 'Ahilyanager', 'a2z Infotech', '2024-04-02', '09:59', 'Maruti Swift Dzire', 9),
(20, 'vaibhav Pandit', '7666806174', 'Ahilyanager', 'dedgaon', '2024-04-04', '15:00', 'Maruti Brezza', 8),
(21, 'prashant magar', '9172941329', 'Ahilyanager', 'a2z Infotech', '2024-04-04', '02:55', 'Ford Ecosport', 11);

-- --------------------------------------------------------

--
-- Table structure for table `car_safety`
--

CREATE TABLE `car_safety` (
  `car_safety_id` int(11) NOT NULL,
  `car_safety_title` varchar(200) DEFAULT NULL,
  `car_safety_desc` varchar(200) DEFAULT NULL,
  `car_safety_image1` varchar(200) DEFAULT NULL,
  `car_safety_image2` varchar(200) DEFAULT NULL,
  `car_safety_image3` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `car_safety`
--

INSERT INTO `car_safety` (`car_safety_id`, `car_safety_title`, `car_safety_desc`, `car_safety_image1`, `car_safety_image2`, `car_safety_image3`) VALUES
(1, 'Safety', 'Safety is fundamental to the ethos of Tata Motors. Our quest is to invent and innovate newer ways that elevate your safety. We believe your peace of mind is the best comfort our cars can provide. This', '1712377797303saf1.webp', '1712377797315saf2.webp', '1712377797330saf3.webp');

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

CREATE TABLE `contact` (
  `customer_id` int(11) NOT NULL,
  `customer_name` text NOT NULL,
  `customer_mobile` text NOT NULL,
  `customer_email` text NOT NULL,
  `customer_message` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `contact`
--

INSERT INTO `contact` (`customer_id`, `customer_name`, `customer_mobile`, `customer_email`, `customer_message`) VALUES
(1, 'va', '23', 'panditv0512@gmail.com', 'ew'),
(2, 'vaibhav Devidas Pandit', '7666806174', 'panditv0512@gmail.com', 'i need a car'),
(3, 'vaibhav', '7666806174', 'panditv0512@gmail.com', 'hey'),
(4, 'vp', '1234567890', 'panditv0512@gmail.com', '3'),
(5, 'v', '7666806174', 'panditv0512@gmail.com', 'g');

-- --------------------------------------------------------

--
-- Table structure for table `disclaimer`
--

CREATE TABLE `disclaimer` (
  `disclaimer_id` int(11) NOT NULL,
  `disclaimer_title` varchar(200) DEFAULT NULL,
  `disclaimer_desc` varchar(15000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `disclaimer`
--

INSERT INTO `disclaimer` (`disclaimer_id`, `disclaimer_title`, `disclaimer_desc`) VALUES
(2, 'Disclaimer', 'lowCars has made every attempt to ensure the accuracy and reliability of the information provided on this website. However, the information is provided as is without warranty of any kind. LowCars does not accept any responsibility or liability for the accuracy, content, completeness, legality, or reliability of the information contained on this website. No warranties, promises and/or representations of any kind, expressed or implied, are given as to the nature, standard, accuracy.Cars has made every attempt to ensure the accuracy and reliability of the information provided on this website. However, the information is provided as is without warranty of any kind. LowCars does not accept any responsibility or liability for the accuracy, content, completeness, legality, or reliability of the information contained on this website. No warranties, promises and/or representations of any kind, expressed or implied, are given as to the nature, standard, accuracy.');

-- --------------------------------------------------------

--
-- Table structure for table `features`
--

CREATE TABLE `features` (
  `features_id` int(11) NOT NULL,
  `features_title` varchar(200) DEFAULT NULL,
  `features_desc` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `features`
--

INSERT INTO `features` (`features_id`, `features_title`, `features_desc`) VALUES
(2, ' App/web Platform', ' App/web Platform Full-Featured App & website to get bookings'),
(3, 'Brand Value', 'Lowcars is well establshied in car rental market and a known player among travellers'),
(4, ' Legal support', 'With name comes the responsiblity so we will help you in any trouble you get'),
(5, ' weekly payment', 'what you will earn will be credited to your bank account each week without any delay');

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE `login` (
  `user_id` int(11) NOT NULL,
  `username` varchar(200) DEFAULT NULL,
  `password` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`user_id`, `username`, `password`) VALUES
(1, 'admin', 'admin@123');

-- --------------------------------------------------------

--
-- Table structure for table `our_office`
--

CREATE TABLE `our_office` (
  `our_office_id` int(11) NOT NULL,
  `our_office_title` varchar(200) DEFAULT NULL,
  `our_office_desc` varchar(200) DEFAULT NULL,
  `our_office_address` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `our_office`
--

INSERT INTO `our_office` (`our_office_id`, `our_office_title`, `our_office_desc`, `our_office_address`) VALUES
(2, 'Our office', 'Cars.com is located at 300 South Riverside, a 23-story Class A, LEED Gold Certified office tower.', '                                                            Cars.com 300 S. Riverside Plaza, Suite 1000 Chicago, IL 6060\r\n                \r\n                \r\n                \r\n                \r\n      ');

-- --------------------------------------------------------

--
-- Table structure for table `program_info`
--

CREATE TABLE `program_info` (
  `program_info_id` int(11) NOT NULL,
  `program_info_title` varchar(200) DEFAULT NULL,
  `program_info_desc` varchar(1000) DEFAULT NULL,
  `program_info_feature1` varchar(200) DEFAULT NULL,
  `program_info_feature2` varchar(200) DEFAULT NULL,
  `program_info_feature3` varchar(200) DEFAULT NULL,
  `program_info_image` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `program_info`
--

INSERT INTO `program_info` (`program_info_id`, `program_info_title`, `program_info_desc`, `program_info_feature1`, `program_info_feature2`, `program_info_feature3`, `program_info_image`) VALUES
(6, ' A PROGRAM BUILT FOR AND WITH PARTNERS', 'We believe the best solutions are born from collaboration. That is why we created the lowcars platform for everyone. And now we have built a partner program to make it easier to work with us and to innovate with us.', 'Collaboration', 'Growth', 'Simplicity', '1712374403196program_info_image.svg');

-- --------------------------------------------------------

--
-- Table structure for table `slider`
--

CREATE TABLE `slider` (
  `id` int(11) NOT NULL,
  `slider_img` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `slider`
--

INSERT INTO `slider` (`id`, `slider_img`) VALUES
(4, '1712381411336slider!.jpg'),
(6, '1712381424819slider2.jpg'),
(8, '1712381438766slider3.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `tariffs`
--

CREATE TABLE `tariffs` (
  `tariffs_id` int(11) NOT NULL,
  `car_name` varchar(100) DEFAULT NULL,
  `how_many_seats` varchar(100) DEFAULT NULL,
  `engine_type` varchar(100) DEFAULT NULL,
  `peakHours` varchar(100) DEFAULT NULL,
  `car_image` varchar(100) DEFAULT NULL,
  `status` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tariffs`
--

INSERT INTO `tariffs` (`tariffs_id`, `car_name`, `how_many_seats`, `engine_type`, `peakHours`, `car_image`, `status`) VALUES
(5, 'Ford Figo', '5 Seats', 'Diesel', '98', '17110992981472039873359cc.png', 'booked'),
(8, 'Maruti Brezza', '5 Seats', 'Petrol', '10', '1711527643447660010437image.jpg', 'booked'),
(9, 'Maruti Swift Dzire', '5 Seats', 'Diesel', '10', '1711527661235334950884image.jpg', 'booked'),
(10, 'Maruti Ertiga', '7 Seats', 'Diesel', '12', '1711527675332268344669marutisuzuki-ertiga-facelift-24ec9156.jpg', 'booked'),
(11, 'Ford Ecosport', '5 Seats', 'Diesel', '12', '17115280673651343313353vvbvv.png', 'booked'),
(12, 'Hyundai i10 Nios (CNG) ', '5 Seats', 'Petrol', '15', '1711528086752395453072datsun-go-plus-t-petrol-640__01.jpg', 'booked'),
(13, 'Tata Tiago', '5 Seats', 'Diesel', '12', '1711528052138548389621images.jpg', 'booked'),
(14, 'Hyundai Xcent', '5 Seats', 'Diesel', '107', '1711528038756392617408Screenshot 2023-08-25 at 4.53.59 PM.png', 'notBooked'),
(15, 'Maruti Alto 800', '5 Seats', 'Petrol', '66', '1711528021386855262217Screenshot 2023-09-08 at 12.30.57 PM.png', 'booked'),
(16, 'Mahindra KUV 100', '6 Seats', 'Diesel', '90', '17115279993101786237255ert.png', 'booked'),
(17, 'Hyundai i20', '5 Seats', 'Diesel', '149', '1711527977234624639631ccc.png', 'notBooked'),
(18, 'Maruti Wagonr', '5 Seats', 'Petrol', '83', '17115279286611382189589maruti-baleno-front-profile-1645085985.jpg', 'notBooked'),
(19, 'Tata Nexon', '5 Seats', 'Diesel', '281', '17115278935371057946339Tata-Nexon-220120201426.jpg', 'notBooked'),
(20, 'Maruti Swift', '5 Seats', 'Diesel', '177', '17115281036671042815174qcu6isa_1467597.jpg', 'booked'),
(21, 'Mahindra XUV3OO', '5 Seats', 'Diesel', '143', '1711527878284764488529Screenshot_20221107-214622__01.jpg', 'notBooked'),
(22, 'Maruti Swift Dzire', '5 Seats', 'Petrol', '113', '1711527851388590791472dzire-white-merged.png', 'notBooked'),
(23, 'VENUE', '5 Seats', 'Petrol', '15', '1711527832727660010437image.jpg', 'notBooked'),
(24, 'Renault Kwid', '5 Seats', 'Petrol', '10', '1711527816730503737496kig.png', 'booked'),
(26, 'SWIFT AT', '5 Seats', 'Diesel', '10', '1711527739520548389621images.jpg', 'notBooked');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `users_id` int(11) NOT NULL,
  `email` varchar(200) DEFAULT NULL,
  `password` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`users_id`, `email`, `password`) VALUES
(2, 'abc@gmail.com', '$2b$10$eYTSIgN.XjwPDbbc.e80ue3pdgsWraJQEn1vLIwu2orxSVwImtsRm');

-- --------------------------------------------------------

--
-- Table structure for table `who_we_are`
--

CREATE TABLE `who_we_are` (
  `who_we_are_id` int(11) NOT NULL,
  `who_we_are_title` varchar(200) DEFAULT NULL,
  `who_we_are_desc` varchar(1000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `who_we_are`
--

INSERT INTO `who_we_are` (`who_we_are_id`, `who_we_are_title`, `who_we_are_desc`) VALUES
(2, 'Who we are', '\r\nA Tata Motor is a leading digital marketplace and solutions provider for the automotive industry that connects car shoppers with sellers. Launched in 1998 and headquartered in Chicago, the Company empowers shoppers with the data, resources and digital tools needed to make informed buying decisions and seamlessly connect with automotive retailers. In a rapidly changing market, Cars.com enables dealerships and OEMs with innovative technical solutions and data-driven intelligence to better reach and influence ready-to-buy shoppers, increase inventory turn and gain market share. In 2018, Cars.com acquired Dealer Inspire®, an innovative technology company building solutions that future-proof dealerships with more efficient operations, a faster and easier car buying process, and connected digital experiences that sell and service more vehicles. Cars.com properties include DealerRater®, Dealer Inspire®, Auto.com™, PickupTrucks.com®\r\n                ');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `about_our_program`
--
ALTER TABLE `about_our_program`
  ADD PRIMARY KEY (`about_our_program_id`);

--
-- Indexes for table `about_performance`
--
ALTER TABLE `about_performance`
  ADD PRIMARY KEY (`about_performance_id`);

--
-- Indexes for table `about_story`
--
ALTER TABLE `about_story`
  ADD PRIMARY KEY (`about_story_id`);

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`admin_id`);

--
-- Indexes for table `basic_information`
--
ALTER TABLE `basic_information`
  ADD PRIMARY KEY (`basic_information_id`);

--
-- Indexes for table `booked_car`
--
ALTER TABLE `booked_car`
  ADD PRIMARY KEY (`book_car_id`);

--
-- Indexes for table `car_safety`
--
ALTER TABLE `car_safety`
  ADD PRIMARY KEY (`car_safety_id`);

--
-- Indexes for table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`customer_id`);

--
-- Indexes for table `disclaimer`
--
ALTER TABLE `disclaimer`
  ADD PRIMARY KEY (`disclaimer_id`);

--
-- Indexes for table `features`
--
ALTER TABLE `features`
  ADD PRIMARY KEY (`features_id`);

--
-- Indexes for table `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`user_id`);

--
-- Indexes for table `our_office`
--
ALTER TABLE `our_office`
  ADD PRIMARY KEY (`our_office_id`);

--
-- Indexes for table `program_info`
--
ALTER TABLE `program_info`
  ADD PRIMARY KEY (`program_info_id`);

--
-- Indexes for table `slider`
--
ALTER TABLE `slider`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tariffs`
--
ALTER TABLE `tariffs`
  ADD PRIMARY KEY (`tariffs_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`users_id`);

--
-- Indexes for table `who_we_are`
--
ALTER TABLE `who_we_are`
  ADD PRIMARY KEY (`who_we_are_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `about_our_program`
--
ALTER TABLE `about_our_program`
  MODIFY `about_our_program_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `about_performance`
--
ALTER TABLE `about_performance`
  MODIFY `about_performance_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `about_story`
--
ALTER TABLE `about_story`
  MODIFY `about_story_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `admin_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `basic_information`
--
ALTER TABLE `basic_information`
  MODIFY `basic_information_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `booked_car`
--
ALTER TABLE `booked_car`
  MODIFY `book_car_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `car_safety`
--
ALTER TABLE `car_safety`
  MODIFY `car_safety_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `contact`
--
ALTER TABLE `contact`
  MODIFY `customer_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `disclaimer`
--
ALTER TABLE `disclaimer`
  MODIFY `disclaimer_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `features`
--
ALTER TABLE `features`
  MODIFY `features_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `login`
--
ALTER TABLE `login`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `our_office`
--
ALTER TABLE `our_office`
  MODIFY `our_office_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `program_info`
--
ALTER TABLE `program_info`
  MODIFY `program_info_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `slider`
--
ALTER TABLE `slider`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `tariffs`
--
ALTER TABLE `tariffs`
  MODIFY `tariffs_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `users_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `who_we_are`
--
ALTER TABLE `who_we_are`
  MODIFY `who_we_are_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
