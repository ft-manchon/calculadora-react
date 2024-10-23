export default function Botao({
  char,
  onClick,
  sizeCol,
  sizeRow
}: {
  char: string;
  onClick: (char: string) => void;
  sizeCol?: number
  sizeRow?: number
}) {


  return (
    <td colSpan={sizeCol} rowSpan={sizeRow}>
      <button
        className="bg-black text-white w-full h-full min-w-12 min-h-12 max-w-24 max-h-24 rounded-full"
        onClick={() => onClick(char)}>
        <p>{char}</p>
      </button>
    </td>
  )
}