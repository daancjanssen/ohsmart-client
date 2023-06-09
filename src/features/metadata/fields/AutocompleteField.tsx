import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { getStatus } from '../metadataHelpers';
import { StatusIcon } from '../../generic/Icons';
import { setField } from '../metadataSlice';
import type { AutocompleteFieldProps, OptionsType } from '../../../types/Metadata';
import { lookupLanguageString } from '../../../app/i18n';
import { getMetadataSubmitStatus } from '../../submit/submitSlice';

const AutocompleteField = ({field, sectionIndex, isLoading}: AutocompleteFieldProps) => {
  const dispatch = useAppDispatch();
  const status = getStatus(field);
  const { t } = useTranslation('metadata');
  const metadataSubmitStatus = useAppSelector(getMetadataSubmitStatus);

  const options = Array.isArray(field.options) ? field.options as OptionsType[] : [];

  return (
    <Stack direction="row" alignItems="center">
      <Autocomplete
        multiple={field.multiselect}
        fullWidth 
        id={field.id}
        options={options}
        groupBy={(option) => (option.header && lookupLanguageString(option.header)) || ''}
        value={field.value || (field.multiselect ? [] : null)}
        renderInput={
          (params) => 
            <TextField 
              {...params}
              label={`${lookupLanguageString(field.label)}${field.required ? ' *' : ''}`}
              error={field.hasOwnProperty('valid') && (!field.valid && field.valid !== '') && field.required}
              helperText={field.hasOwnProperty('valid') && (!field.valid && field.valid !== '') && field.required && t('incorrect')}
            />
        }
        onChange={(e, newValue) => dispatch(setField({
          sectionIndex: sectionIndex,
          id: field.id,
          value: newValue
        }))}
        loading={isLoading === true}
        disabled={metadataSubmitStatus !== ''}
      />
      {field.description && <StatusIcon margin="l" status={status} title={lookupLanguageString(field.description)} />}
    </Stack>
  )
}

export default AutocompleteField;