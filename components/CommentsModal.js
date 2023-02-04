import { useRecoilState } from "recoil"
import {modalState} from "../atom/modalAtom"
export default function CommentsModal() {
    const [open, setOpen] = useRecoilState(modalState)
  return (
    <div>
        <h1>Comment Modal</h1>
        {open && <h1>boop boop</h1>}
    </div>
  )
}
