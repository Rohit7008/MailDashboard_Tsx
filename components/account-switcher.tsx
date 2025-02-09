"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { sampleData } from "@/lib/sample-data";

export function AccountSwitcher() {
  const [open, setOpen] = React.useState(false);
  const [selectedAccount, setSelectedAccount] = React.useState(
    sampleData.accounts[0]
  );

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          <Avatar className="mr-2 h-5 w-5">
            <AvatarImage
              src={selectedAccount.avatar}
              alt={selectedAccount.name}
            />
            <AvatarFallback>{selectedAccount.name[0]}</AvatarFallback>
          </Avatar>
          {selectedAccount.name}
          <ChevronsUpDown className="ml-auto h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search accounts..." />
          <CommandList>
            <CommandEmpty>No account found.</CommandEmpty>
            <CommandGroup>
              {sampleData.accounts.map((account) => (
                <CommandItem
                  key={account.id}
                  onSelect={() => {
                    setSelectedAccount(account);
                    setOpen(false);
                  }}
                >
                  <Avatar className="mr-2 h-5 w-5">
                    <AvatarImage src={account.avatar} alt={account.name} />
                    <AvatarFallback>{account.name[0]}</AvatarFallback>
                  </Avatar>
                  {account.name}
                  <Check
                    className={cn(
                      "ml-auto h-4 w-4",
                      selectedAccount.id === account.id
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
