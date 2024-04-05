import { DeleteModal } from '@/components/DeleteModal'
import { Button } from '@/components/ui/button'
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog";import React from 'react'

function page() {
  return (
    <div><Dialog
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
    </Dialog></div>
  )
}

export default page