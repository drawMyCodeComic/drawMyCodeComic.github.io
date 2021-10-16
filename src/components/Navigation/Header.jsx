import React from 'react';
import { Image } from '@chakra-ui/image';
import { Flex, Box } from '@chakra-ui/layout';
import { FormattedMessage } from 'react-intl';
import { Link } from 'gatsby';
const logo = require('../../images/assets/drawmycode_logo.png');
const instagramLogo = require('../../images/assets/instagram_logo.png');

export const Header = () => {
    return (
        <Flex
            w="calc(100% - 300px)"
            m="auto"
            mt="42px"
            justifyContent="space-between"
            alignItems="center"
        >
            <Image src={logo} />
            <Flex>
                <Box mr="39px">
                    <Link>
                        <FormattedMessage id="nav.home" />
                    </Link>
                </Box>
                <Box mr="39px">
                    <Link>
                        <FormattedMessage id="nav.about" />
                    </Link>
                </Box>
                <Box mr="39px">
                    <Link>
                        <FormattedMessage id="nav.donation" />
                    </Link>
                </Box>
                <Box>
                    <Link>
                        <Image src={instagramLogo} />
                    </Link>
                </Box>
            </Flex>
        </Flex>
    );
}