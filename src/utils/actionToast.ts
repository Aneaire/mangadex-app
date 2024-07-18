import { toast } from "@/components/ui/use-toast";

export const savedInLibraryToast = () => {
  toast({
    title: "Saved in library",
    description: "Your manga has been saved in your library",
  });
};

export const alreadySaved = () => {
  toast({
    title: "Already saved",
    description: "Your manga is already saved in your library",
  });
};
