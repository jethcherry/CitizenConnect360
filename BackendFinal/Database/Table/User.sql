CREATE TABLE    Conct360Users (
    UserId VARCHAR(255) PRIMARY KEY,
    Name VARCHAR(255) NOT NULL,
    Email VARCHAR(255) NOT NULL UNIQUE,
    Password VARCHAR(255) NOT NULL,
    isDeleted INT DEFAULT 0,
    isEmailSent INT DEFAULT 0,
    isApproved INT DEFAULT 0,
    Role VARCHAR(255),
    RoleId INT,
    FOREIGN KEY (RoleId) REFERENCES Roles(RoleId)
);
