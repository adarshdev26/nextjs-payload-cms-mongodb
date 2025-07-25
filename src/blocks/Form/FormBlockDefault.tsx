'use client'
import React from 'react'
import { FormProvider } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import RichText from '@/components/RichText'
import { fields } from './fields'
import contactImg from '../../../src/assets/contact.jpeg'

export const FormBlockDefault = ({
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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 items-start max-w-6xl mx-auto">
      <div className="rounded-lg overflow-hidden ">
        <Image src={contactImg} width={526} height={526} alt="image" />
      </div>

      <div className="p-4 lg:p-6 border border-gray-300 rounded-[0.8rem] ">
        <FormProvider {...formFromProps}>
          {!isLoading && hasSubmitted && confirmationType === 'message' && (
            <RichText data={confirmationMessage} />
          )}
          {isLoading && !hasSubmitted && <p>Loading, please wait...</p>}
          {error && <div>{`${error.status || '500'}: ${error.message || ''}`}</div>}
          {!hasSubmitted && (
            <form id={formID} onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4 last:mb-0">
                {formFromProps?.form?.fields?.map((field: any, index: number) => {
                  const Field = fields?.[field.blockType as keyof typeof fields]
                  return Field ? (
                    <div className="mb-6 last:mb-0" key={index}>
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
                className="bg-gradient-to-br from-[#0963a4] to-[#33a5df] text-white rounded-[50px] p-3 w-full text-sm hover:bg-[#0b7aba] transition-all duration-500 ease-in-out"
                form={formID}
                type="submit"
                variant="default"
              >
                {formFromProps.form.submitButtonLabel}
              </Button>
            </form>
          )}
        </FormProvider>
      </div>
    </div>
  )
}
