import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./dialog";
import { Button } from "./button";
import toast from "react-hot-toast"; // ✅ import toast

export function WaitlistForm({ open, onOpenChange }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    profession: "student",
  });

  const handleSubmit = async (e) => {
    console.log("Submitting form data:", formData);
    e.preventDefault();

    // Log form data before submission
    console.log("Form data being submitted:", formData);

    try {
      const formDataEncoded = new URLSearchParams();
      // Explicitly append each field to ensure correct names
      formDataEncoded.append("name", formData.name);
      formDataEncoded.append("email", formData.email);
      formDataEncoded.append("phone", formData.phone);
      formDataEncoded.append("city", formData.city);
      formDataEncoded.append("profession", formData.profession); // Make sure spelling matches everywhere

      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbzq4moEBRI8aPn8Q16icj2h7cyT31wFUXGnRM2SoW_AJIbuhQ_Qll1pdSKpxyTqZlk7/exec",
        {
          // const response = await fetch(
          //   "https://script.google.com/macros/s/AKfycbxmCQo19xyOPj9sLQUkSLTTPBGzq-vD1L1XSuaHRmaaiMSf-YI3KuiTYBeykHp21mtQGA/exec",
          //   {
          method: "POST",
          body: formDataEncoded,
          // Remove mode: "no-cors" to see actual errors
          mode: "no-cors",
        }
      );

      // Since you can't read response in no-cors mode, consider this alternative:
      toast.success("Form submitted successfully!"); // ✅ success toast
      console.log("Form submitted, check Google Sheet for data");

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        city: "",
        profession: "student",
      });
      onOpenChange(false);
    } catch (err) {
      console.error("Submission error:", err);
      toast.error("Error submitting form. Please try again."); // ✅ error toast
    }
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Handle form submission here
  //   console.log("Form submitted:", formData);
  //   onOpenChange(false);
  // };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] bg-white rounded-[20px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center mb-4">
            Join the Waitlist
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              required
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              required
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              required
              pattern="[0-9]{10}"
              title="Please enter a 10-digit phone number"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              City
            </label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              required
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              I am a
            </label>
            <select
              name="profession"
              value={formData.profession}
              onChange={handleChange}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <option value="student">Student</option>
              <option value="freelancer">Freelancer</option>
              <option value="professional">Professional</option>
            </select>
          </div>
          <Button
            type="submit"
            className="w-full bg-black text-white hover:bg-gray-800"
          >
            Join Waitlist
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
