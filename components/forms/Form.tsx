import { Formik } from "formik";

function AppForm(
{ initialValues, onSubmit, validationSchema, children }: 
{initialValues: any, onSubmit: (values:any) => void, validationSchema: any, children: React.ReactNode}
) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => onSubmit(values)}
      validationSchema={validationSchema}
    >
      {() => <>{children}</>}
    </Formik>
  );
}

export default AppForm;