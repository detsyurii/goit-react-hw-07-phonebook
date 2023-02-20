export const ContactItem = ({ contact: { name, number, id }, onDelete }) => {
  const handleDelete = () => {
    onDelete(id);
  };
  return (
    <>
      <p>
        {name}: {number}
      </p>
      <button type="button" onClick={handleDelete}>
        delete
      </button>
    </>
  );
};
