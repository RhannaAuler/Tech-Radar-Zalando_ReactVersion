import React from 'react';
import { makeStyles } from '@mui/styles';
import { Grid, List, ListItem, Typography } from '@mui/material';

const useStyles = makeStyles({
    listItem: {
        display: 'flex',
        alignItems: 'flex-start',
        paddingTop: 0,
        paddingBottom: 0,
        margin: 0,
    },
    bullet: {
        marginTop: 'auto',
        marginRight: '0.5rem',
        marginLeft: '-1rem',
        fontSize: '1.2rem',
    },
});

const InformationTable = () => {
    const classes = useStyles();

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Grid 
                container 
                spacing={4}
                direction="row"
                width={1450}
                display="flex"
                justifyContent="center"
                alignItems="flex-start"
            >
                <Grid item xs={6}>
                    <Typography variant="h6" fontWeight="bold" style={{ textAlign: 'start' }} paragraph>What is the Tech Radar?</Typography>
                    <Typography variant="body1" style={{ textAlign: 'start' }}>
                        The Zalando Tech Radar is a list of technologies, complemented by an
                        assessment result, called <em>ring assignment</em>. We use four
                        rings with the following semantics:
                    </Typography>
                    <List>
                        <ListItem className={classes.listItem}>
                            <Typography variant="body1" component="span">
                                <span className={classes.bullet}>&bull;</span>
                                <strong>ADOPT</strong> — Technologies we have high confidence in to serve our purpose, also in large scale.
                                Technologies with a usage culture in our Zalando production environment, low risk and recommended to be widely used.
                            </Typography>
                        </ListItem>
                        <ListItem className={classes.listItem}>
                            <Typography variant="body1" component="span">
                                <span className={classes.bullet}>&bull;</span>
                                <strong>TRIAL</strong> — Technologies that we have seen work with success in project work to solve a real problem;
                                first serious usage experience that confirm benefits and can uncover limitations. TRIAL technologies are slightly more
                                risky; some engineers in our organization walked this path and will share knowledge and experiences.
                            </Typography>
                        </ListItem>
                        <ListItem className={classes.listItem}>
                            <Typography variant="body1" component="span">
                                <span className={classes.bullet}>&bull;</span>
                                <strong>ASSESS</strong> — Technologies that are promising and have clear potential value-add for us; technologies worth
                                to invest some research and prototyping efforts in to see if it has impact. ASSESS technologies have higher risks;
                                they are often brand new and highly unproven in our organisation. You will find some engineers that have knowledge in
                                the technology and promote it, you may even find teams that have started a prototyping effort.
                            </Typography>
                        </ListItem>
                        <ListItem className={classes.listItem}>
                            <Typography variant="body1" component="span">
                                <span className={classes.bullet}>&bull;</span>
                                <strong>HOLD</strong> — Technologies not recommended to be used for new projects. Technologies that we think are not
                                (yet) worth to (further) invest in. HOLD technologies should not be used for new projects, but usually can be continued
                                for existing projects.
                            </Typography>
                        </ListItem>
                    </List>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="h6" fontWeight="bold" style={{ textAlign: 'start' }} paragraph>What is the purpose?</Typography>
                    <Typography variant="body1" style={{ textAlign: 'start' }} paragraph>
                        The Tech Radar is a tool to inspire and support Engineering teams at
                        Zalando to pick the best technologies for new projects; it provides
                        a platform to share knowledge and experience in technologies, to
                        reflect on technology decisions and continuously evolve our
                        technology landscape. Based on the{" "}
                        <a href="https://www.thoughtworks.com/radar">
                            pioneering work of ThoughtWorks
                        </a>
                        , our Tech Radar sets out the changes in technologies that are
                        interesting in software development — changes that we think our
                        engineering teams should pay attention to and use in their projects.
                    </Typography>
                    <Typography variant="h6" fontWeight="bold" style={{ textAlign: 'start' }} paragraph>How do we maintain it?</Typography>
                    <Typography variant="body1" style={{ textAlign: 'start' }} paragraph>
                        The Tech Radar is maintained by our <em>Principal Engineers</em> —
                        who facilitate and drive the technology selection discussions at
                        Zalando across the Engineering Community. Assignment of technologies
                        to rings is the outcome of ring change proposals, which are
                        discussed and voted on. The Tech Radar is open for contribution for
                        all Engineering teams at Zalando and depends on their active
                        participation to share lessons learned, pitfalls, and contribute to
                        good practices on using the technologies.
                    </Typography>
                    <Typography variant="body1" style={{ textAlign: 'start' }} paragraph>
                        Check out our{" "}
                        <a href="https://engineering.zalando.com/tags/tech-radar.html">
                            Engineering Blog
                        </a>{" "}
                        for more information on how we approach Technology Selection and use
                        the Tech Radar at Zalando.
                    </Typography>
                    <Typography variant="body1" style={{ fontStyle: 'italic', textAlign: 'start' }}>
                        {/* <em> used fontStyle instead */}
                        BTW, if you would like to create your own Tech Radar — we have{" "}
                        <a href="https://github.com/zalando/tech-radar">
                            open sourced the code
                        </a>{" "}
                        to generate this visualization.
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
};

export default InformationTable;