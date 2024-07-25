USE CitizenConnect360;

CREATE OR ALTER PROCEDURE deleteView
(
    @ViewId VARCHAR(255)
)
AS
BEGIN
    DELETE FROM CitizenViews WHERE ViewId = @ViewId;
END;
