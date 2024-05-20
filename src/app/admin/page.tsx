"use client";

import Item from "@/data/item";
import { Autocomplete, TextField } from "@mui/material";
import { useState } from "react";

type ItemProp = {
  name: string;
  value: string;
  category: string;
};
export default function Admin() {
  const [value, setValue] = useState<ItemProp[]>([]);
  return (
    <>
      <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
        <div className="shadow-default rounded-sm border border-strokedark bg-boxdark">
          <div className="border-b border-strokedark px-6.5 py-4">
            <h3 className="font-medium text-white">Gửi item cho người chơi</h3>
          </div>
          <div className="flex flex-col gap-5.5 p-6.5">
            <div>{`value: ${value.map((item) => item.name)}`}</div>
            <Autocomplete
              multiple
              options={Item}
              getOptionLabel={(option: ItemProp) => option.name}
              value={value}
              onChange={(event, newValue) => setValue(newValue)}
              renderInput={(params) => (
                <TextField {...params} label="Input keyword to find Items" />
              )}
            />
            {value.map((item) => (
              <TextField
                label={item.name}
                type="number"
                defaultValue={1}
                InputProps={{ inputProps: { min: 1 } }}
              />
            ))}
            <button className="text-gray flex w-full justify-center rounded bg-primary p-3 font-medium hover:bg-opacity-90">
              Xác nhận
            </button>
          </div>
        </div>
        <div className="shadow-default rounded-sm border border-strokedark bg-boxdark">
          <div className="border-b border-strokedark px-6.5 py-4">
            <h3 className="font-medium text-white">Hoàn thành nhiệm vụ</h3>
          </div>
          <div className="flex flex-col gap-5.5 p-6.5">
            {/* Autocomplete */}
            <button className="text-gray flex w-full justify-center rounded bg-primary p-3 font-medium hover:bg-opacity-90">
              Xác nhận
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
