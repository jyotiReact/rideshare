import AuthModal from "@/components/ui/authModal";
import Link from "next/link";

export function SignIn() {
  return (
    <>
      <div className="bg-white py-8 px-4  sm:rounded-lg sm:px-10">
        <div className="space-y-6">
          <div>
            <button
              type="button"
              className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-full shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Continue with Email
            </button>
          </div>

          <div>
            <button
              type="button"
              className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-full  shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Continue with Phone
            </button>
          </div>

          <div>
            <button
              type="button"
              className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-full  shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Continue with Google
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default function AuthForm({ open, onOpenChange }) {
  return (
    <AuthModal title="Sign In" open={open} onOpenChange={onOpenChange}>
      <SignIn />
    </AuthModal>
  );
}
