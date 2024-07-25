USE CitizenConnect360;

CREATE OR ALTER PROCEDURE getView
(
    @ViewId VARCHAR(255)
)
AS
BEGIN
    SELECT * FROM CitizenViews WHERE ViewId = @ViewId;
END;
