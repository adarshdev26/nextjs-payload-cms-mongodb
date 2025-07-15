'use client'
import React from 'react'
import { FormProvider } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import RichText from '@/components/RichText'
import { fields } from './fields'

export const FormBlockNewsletter = ({
  formID,
  formFromProps,
  handleSubmit,
  onSubmit,
  isLoading,
  hasSubmitted,
  confirmationType,
  confirmationMessage,
  error,
  control,
  errors,
  register,
}: any) => {
  return (
    <div className=" rounded-xl px-4 py-12 flex flex-col items-center text-center shadow-md">
      <h2 className="text-[36px]  text-[#0963a4] mb-2">Subscribe now to Our Newsletter</h2>
      <p className="text-sm text-gray-600 mb-6">All your information is completely confidential</p>

      <FormProvider {...formFromProps}>
        {!isLoading && hasSubmitted && confirmationType === 'message' && (
          <RichText data={confirmationMessage} />
        )}
        {isLoading && !hasSubmitted && <p>Loading, please wait...</p>}
        {error && <div>{`${error.status || '500'}: ${error.message || ''}`}</div>}
        {!hasSubmitted && (
          <form
            id={formID}
            onSubmit={handleSubmit(onSubmit)}
            className="w-full max-w-xl flex flex-col sm:flex-row items-center gap-4"
          >
            <div className="flex-grow w-full">
              {formFromProps?.form?.fields?.map((field: any, index: number) => {
                const Field = fields?.[field.blockType as keyof typeof fields]
                return Field ? (
                  <div key={index}>
                    <Field
                      form={formFromProps.form}
                      {...field}
                      {...formFromProps}
                      control={control}
                      errors={errors}
                      register={register}
                    />
                  </div>
                ) : null
              })}
            </div>

            <Button
              className="bg-gradient-to-b from-[#0963a4] to-[#33a5df] hover:bg-blue-700 text-white px-6 py-3 rounded-full text-sm"
              form={formID}
              type="submit"
              variant="default"
            >
              {formFromProps.form.submitButtonLabel || 'Subscribe'}
            </Button>
          </form>
        )}
      </FormProvider>
    </div>
  )
}
