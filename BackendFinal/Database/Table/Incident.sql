USE CitizenConnect360;

CREATE TABLE Incident (
    IncidenceId VARCHAR(255) PRIMARY KEY,
    Image VARCHAR(1000),
    Title VARCHAR(255),
    Location VARCHAR(255),
    Description TEXT,
    Date DATE,
    Author VARCHAR(255),
    UserId VARCHAR(255),
    FOREIGN KEY (UserId) REFERENCES Users(UserId)
);

