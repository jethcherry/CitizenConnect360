CREATE TABLE Roles (
    RoleId INT PRIMARY KEY IDENTITY(1,1),
    RoleName VARCHAR(50) UNIQUE NOT NULL
);


INSERT INTO Roles (RoleName) VALUES ('citizen'), ('government official'), ('admin');
