USE CitizenConnect360;

CREATE TABLE CitizenViews
(
    ViewId VARCHAR(255) PRIMARY KEY,
    Image VARCHAR(1000),
    Title VARCHAR(255) NOT NULL,
    Description VARCHAR(255) NOT NULL,
    Date DATE NOT NULL,
    UserId VARCHAR(255),
    FOREIGN KEY (UserId) REFERENCES Users(UserId)
);
