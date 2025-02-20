import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Lookup from "@/data/Lookup";
import { Button } from "@/components/ui/Button"
import { AiTwotoneThunderbolt } from "react-icons/ai";
import axios from "axios";
import { useContext } from "react";
import { UserDetailsContext } from "@/context/UserDetailsContext";
import { useGoogleLogin } from "@react-oauth/google";

function SignInDialog({ openDialog, closeDialog }) {

  const {userDetails, setUserDetails} = useContext(UserDetailsContext);

  const googleLogin = useGoogleLogin({
    onSuccess: async tokenResponse => {
      console.log(tokenResponse);
      const userInfo = await axios.get(
        'https://www.googleapis.com/oauth2/v3/userinfo',
        { headers: { Authorization: 'Bearer '+ tokenResponse?.access_token }}
      );
  
      console.log(userInfo);
      setUserDetails(userInfo?.data);
      closeDialog(false);
    },
    onError: errorResponse => console.log(errorResponse),
  });
  


  return (
    <Dialog open={openDialog} onOpenChange={closeDialog}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle></DialogTitle>
          <DialogDescription>
            <div className="justify-center items-center flex flex-col gap-2">
            <h2 className="font-bold text-2xl flex">{Lookup.SIGNIN_HEADING} <AiTwotoneThunderbolt /></h2>
            <p className='mt-2 text-center'>{Lookup.SIGNIN_SUBHEADING}</p>
            <Button className='bg-blue-500 text-white hover:bg-blue-400 mt-2' onClick= {googleLogin}>Sign In with Google</Button>
            <p className='text-center mt-2'>{Lookup.SIGNIn_AGREEMENT_TEXT}</p>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default SignInDialog;