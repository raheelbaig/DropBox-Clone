"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useAppStore } from "@/store/store";
import { useUser } from "@clerk/nextjs";
import { deleteDoc, disableNetwork } from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";

export function DeleteModal() {
  const { user } = useUser();

  const [isDeleteModalOpen, setIsDeleteModalOpen, fileId, setFileId] =
    useAppStore((state) => [
      state.isDeleteModalOpen,
      state.setIsDeleteModalOpen,
      state.fileId,
      state.setFileId,
    ]);

    async function deleteFile() {
        // if (!user || !fileId) return;
        // @ts-ignore
        const fileRef = ref(storage, `users/${user.id}/files/${fileId}`);
    
        try {
          deleteObject(
            //@ts-ignore
            fileRef.then(async () => {
              //@ts-ignore
              deleteDoc(doc(db, "users".user.id, "files", fileId)).then(() => {
                console.log("deleted!");
              });
            })
          );
        } catch (error) {
          console.log(error);
        }
        setIsDeleteModalOpen(false)
      }

  
  return (
    <Dialog
    //   open={isDeleteModalOpen}
    //   onOpenChange={(isOpen) => {
    //     setIsDeleteModalOpen(isOpen);
    //   }}
    >
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Are you sure you want to delete?</DialogTitle>
          <DialogDescription>
            The action cannot be undone. This will permanently delete your file!
          </DialogDescription>
        </DialogHeader>
        <div className="flex py-3 space-x-2">
          <Button
            size="sm"
            className="flex-1 px-3"
            variant={"ghost"}
            // onClick={() => setIsDeleteModalOpen(false)}
          >
            <span className="sr-only">Cancel</span>
            <span>Cancel</span>
          </Button>

          <Button
            type="submit"
            size="sm"
            className="flex-1 px-3"
            // onClick={() => deleteFile()}
          >
            <span className="sr-only">Cancel</span>
            <span>Cancel</span>
          </Button>
        </div>

        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
    
  );
}

// "use client"

// import { Button } from "@/components/ui/button"
// import {
//   Dialog,
//   DialogClose,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog"

// export function DeleteModal() {
//   return (
//     <Dialog>
//       <DialogTrigger asChild>
//         <Button variant="outline">Share</Button>
//       </DialogTrigger>
//       <DialogContent className="sm:max-w-md">
//         <DialogHeader>
//           <DialogTitle>Share link</DialogTitle>
//           <DialogDescription>
//             Anyone who has this link will be able to view this.
//           </DialogDescription>
//         </DialogHeader>
//         <div className="flex items-center space-x-2">
//           <div className="grid flex-1 gap-2">
           
//           </div>
//           <Button type="submit" size="sm" className="px-3">
//             <span className="sr-only">Copy</span>
//           </Button>
//         </div>
//         <DialogFooter className="sm:justify-start">
//           <DialogClose asChild>
//             <Button type="button" variant="secondary">
//               Close
//             </Button>
//           </DialogClose>
//         </DialogFooter>
//       </DialogContent>
//     </Dialog>
    
//   )
// }
