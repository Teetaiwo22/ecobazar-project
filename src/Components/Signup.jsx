import React from "react";

const Signup = () => {
  return (
    <section className="border-b py-2">
      <div className="flex justify-between items-center text-xs">
        <div>
          <p>Store Location: Lincoln- 344, Illinois, Chicago, USA</p>
        </div>

        <div className="flex items-center gap-6">
            <div className="flex gap-6">
                <div><p>Eng</p></div>
                <div><p>USD</p></div>
            </div>
            <div className="flex items-center gap-6">
                <div><p>Sign in</p></div>
                <div><p>Sign up</p></div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
