
CREATE DATABASE webplog;

GRANT ALL PRIVILEGES ON webplog.* TO 'lh'@'localhost' IDENTIFIED BY 'pass';
GRANT SELECT ON webplog.* TO 'lh'@'localhost';

USE webplog;

CREATE TABLE `website` ( `url` varchar(2045), `name` varchar(155), `addDate` DateTime, `empl` varchar(510) );

INSERT INTO `website` (`url`, `name`, `addDate`, `empl`) VALUES
('https://www.youtube.com/', 'Youtube', '2020-04-20 14:46:00', './Youtube/'),
('https://www.amazon.fr/', 'Amazon', '2020-04-20 14:47:00', './Amazon/'),
('www.spotify.com', 'Spotify', '2020-04-20 18:47:00', './Spotify/'),
('https://www.deezer.com/fr/', 'Deezer', '2020-04-20 18:48:00', './Deezer/'),
('https://www.auchandrive.fr/', 'AuchanDrive', '2020-04-20 18:48:00', './auchandrive/'),
('https://www.leclercdrive.fr/', 'LeclercDrive', '2020-04-20 18:50:00', './LeclercDrive/'),
('https://teams.microsoft.com/', 'MicrosoftTeams', '2020-04-20 18:51:00', './MicrosoftTeams/'),
('https://www.fnac.com/', 'Fnac', '2020-04-20 18:52:00', './fnac/'),
('https://www.boulanger.com/', 'Boulanger', '2020-04-20 18:52:00', './boulanger/'),
('http://localhost:8082/test', 'test', '2020-04-21 09:23:00', './test/');