import { Tabs, Tab } from "../../components/common/Tabs";
import Input from "../../components/common/Input";
import AuthService from "../../services/auth.service";
import {
  profileFields,
  resetPasswordFields,
} from "../../utils/constants/FormFields";
import FormAction from "../../components/auth/FormAction";

export default function ProfilePage() {
  const fields = profileFields;
  const resetFields = resetPasswordFields;
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("asdf");
  };
  return (
    <div className="max-w-5xl p-4 mx-auto">
      <Tabs>
        <Tab label="Personal Information">
          <div className="py-4 mx-auto max-w-96">
            <h2 className="mb-2 text-lg font-medium">Personal Information</h2>

            <div className="">
              {fields.map((field) => (
                <Input
                  key={field.id}
                  value={
                    field.id === "username"
                      ? AuthService.getCurrentUser().username
                      : ""
                  }
                  labelText={field.labelText}
                  labelFor={field.labelFor}
                  id={field.id}
                  name={field.name}
                  type={field.type}
                  isRequired={field.isRequired}
                  placeholder={field.placeholder}
                />
              ))}
            </div>
          </div>
        </Tab>
        <Tab label="Change Password">
          <div className="py-4 mx-auto max-w-96">
            <h2 className="mb-2 text-lg font-medium">Change Password</h2>
            <form
              className="max-w-xl mx-4 my-8 space-y-6 md:mx-auto "
              onSubmit={handleSubmit}
            >
              <div className="">
                {resetFields.map((field) => (
                  <Input
                    key={field.id}
                    value={field.value}
                    labelText={field.labelText}
                    labelFor={field.labelFor}
                    id={field.id}
                    name={field.name}
                    type={field.type}
                    isRequired={field.isRequired}
                    placeholder={field.placeholder}
                  />
                ))}
              </div>
              <FormAction handleSubmit={handleSubmit} text="Change" />
            </form>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
}
