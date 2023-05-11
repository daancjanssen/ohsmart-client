import { Suspense } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import footer from '../config/global/footer';
import styles from './Footer.module.css';
import { useTranslation } from 'react-i18next';
import type { Footer as FooterType } from '../types/Pages';
import { lookupLanguageString } from '../app/helpers';

const Footer = () => {
  const { t } = useTranslation('footer');
  return (
    <>
      <Box
        sx={{
          bgcolor: 'neutral.main',
          mt: 8,
          pt: 4,
          pb: 4,
        }}
      >
        <Container>
          <Grid container columns={4} spacing={2}>
            <Suspense fallback="">
              {footer.map( (item: FooterType, i) => 
                <Grid xs={4} sm={2} md={1} key={i}>
                  <Stack direction="column" alignItems="start">
                    {item.header && 
                      <h4>{lookupLanguageString(item.header)}</h4>
                    }
                    {item.links && item.links.map( (link, j) =>
                      <Link href={link.link} underline="none" key={`link-${i}`}>
                        {lookupLanguageString(link.name)}
                      </Link>
                    )}
                    {item.freetext && 
                      <span dangerouslySetInnerHTML={{__html: lookupLanguageString(item.freetext) || '' }} className={styles.footerFreeText} />
                    }
                  </Stack>
                </Grid>
              )}
            </Suspense>
          </Grid>
        </Container>
      </Box>
      <Box
        sx={{
          bgcolor: 'neutralDark.main',
          color: 'neutralDark.contrastText',
          pt: 4,
          pb: 4,
        }}
      >
        <Container>
          <Grid container columns={2}>
            <Suspense fallback="">
              <Grid xs={2} md={1}>
                {t('left')}
              </Grid>
              <Grid xs={2} md={1}>
                {t('right')}
              </Grid>
            </Suspense>
          </Grid>
        </Container>
      </Box>
    </>
  )
}

export default Footer;