import Grid from '@mui/material/Unstable_Grid2';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { memo } from 'react';
import type { FieldProps, GroupFieldProps, TextFieldType, InputField } from '../../types/Metadata';
import grey from '@mui/material/colors/grey';
import { DeleteButton, AddButtonText } from './MetadataButtons';
import AutocompleteAPI from './fields/AutocompleteAPI';
import Autocomplete from './fields/Autocomplete';
import TextField from './fields/TextField';

// Memoized Field function, so only the affected field rerenders when form/metadata props change
const SingleField = memo(({field, sectionIndex, groupedFieldId}: FieldProps) => {
  return (
    <Grid xs={12} md={6}>
      {(field.type === 'text' || 
        field.type === 'datetime-local' ||
        field.type === 'date' ||
        field.type === 'number') &&
        <TextField field={field} sectionIndex={sectionIndex} groupedFieldId={groupedFieldId} />
      }
      { field.type === 'repeatSingleField' &&
        field.fields.map( (f: TextFieldType, i: number) => 
          <TextField key={f.id} field={f} sectionIndex={sectionIndex} groupedFieldId={field.id} currentField={i} totalFields={field.fields.length} />
        )
      }
      { field.type === 'autocomplete' && Array.isArray(field.options) &&
        <Autocomplete field={field} sectionIndex={sectionIndex} groupedFieldId={groupedFieldId} />
      }
      { field.type === 'autocomplete' && field.options === 'orcid' &&
        <AutocompleteAPI field={field} sectionIndex={sectionIndex} groupedFieldId={groupedFieldId} />
      }
    </Grid>
  )
});

const FieldGroup = ({field, sectionIndex}: GroupFieldProps) => {
  // check if group is repeatable. If not, lets wrap that single fieldgroup in an array, so we can use the same map function over it
  const fieldArray = field.repeatable ? field.fields as InputField[][] : [field.fields as InputField[]];

  return (
    <Grid xs={12}>
      <Card>
        <CardHeader 
          title={field.label} 
          subheader={field.description} 
          titleTypographyProps={{fontSize: 16}}
          subheaderTypographyProps={{fontSize: 12}}
          sx={{pb: 0, pl: 3, pr: 3}} 
        />
        {fieldArray &&
          <CardContent>
            {fieldArray.map((groupedField, i) =>
              <Stack 
                direction="row" 
                alignItems="center" 
                key={i} 
                sx={{
                  borderTop: i > 0 ? '1px solid' : 'none',
                  borderColor: grey[300],
                  pt: i > 0 ? 1 : 0,
                  mt: i > 0 ? 1 : 0
                }}
              >
                <Grid container sx={{flex: 1}}>
                  {groupedField.map( f => 
                    <SingleField 
                      key={f.id} 
                      field={f} 
                      sectionIndex={sectionIndex} 
                    />
                  )}
                </Grid>
                {field.repeatable && fieldArray.length > 1 &&
                  <DeleteButton sectionIndex={sectionIndex} groupedFieldId={field.id} deleteFieldIndex={i} size="medium" />
                }
              </Stack>
            )}
          </CardContent>
        }
        {field.repeatable &&
          <CardActions sx={{pl: 3, pr: 3, justifyContent: 'right'}}>
            <Stack direction="row" alignItems="center" justifyContent="end">
              <AddButtonText sectionIndex={sectionIndex} groupedFieldId={field.id} type="group" />
            </Stack>
          </CardActions>
        }
      </Card>
    </Grid>
  )
}

export { SingleField, FieldGroup }