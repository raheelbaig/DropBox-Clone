"use client";

import { FileType } from "@/typings";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { DataTable } from "./Table";
import { columns } from "./Columns";
import { useUser } from "@clerk/nextjs";
import { collection, orderBy, query } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "@/firebase";
import { Skeleton } from "@/components/ui/skeleton";

type props = {
  skeletonFiles: FileType[];
};

function TableWrapper({ skeletonFiles }: props) {
  const { user } = useUser();
  const [initialFiles, setInitialFiles] = useState<FileType[]>([]);
  const [sort, setSort] = useState<"asc" | "desc">("desc");

  const [docs, loading, error] = useCollection(
    user &&
      query(
        collection(db, "users", user.id, "files"),
        orderBy("timeStamp", sort)
      )
  );
  useEffect(() => {
      console.log("INSIDE FROM THE USEEFFECT", docs);
    if (!docs) return;

    console.log("Docs...", docs);

    const files: FileType[] = docs.docs.map((doc) => ({
      id: doc.id,
      fullName: doc.data().fullName,
      filename: doc.data().filename || doc.id,
      timestamp: new Date(doc.data().timestamp?.seconds * 1000) || undefined,
      downloadURL: doc.data().downloadURL,
      type: doc.data().type,
      size: doc.data().size,
    }));

    setInitialFiles(files);
    console.log("Initial Files...", initialFiles);
  }, [docs]);

  console.log(docs?.docs.length);

  if (docs?.docs.length === undefined)
    return (
      <div className="flex flex-col">
        <Button variant={"outline"} className="ml-auto w-36 h-10 mb-5">
          <Skeleton className="h-5 w-full" />
        </Button>

        <div className="border rounded-lg">
          <div className="border-b h-12" />
          {skeletonFiles.map((file) => (
            <div
              key={file.id}
              className="flex items-center space-x-4 p-5 w-full"
            >
              <Skeleton className="h-12 w-12" />
              <Skeleton className="h-12 w-full" />
            </div>
          ))}
        </div>
      </div>
    );

  return (
    <div>
      <div className="flex justify-between items-center my-2 mx-2">
        <h2 className="font-bold">All Files</h2>
        <Button
          className="dark:bg-slate-800 dark:text-white/85"
          variant={"outline"}
          onClick={() => setSort(sort === "desc" ? "asc" : "desc")}
        >
          Sort by {sort === "desc" ? "Newest" : "Oldest"}
        </Button>
      </div>

      <DataTable columns={columns} data={skeletonFiles} />
    </div>
  );
}

export default TableWrapper;
