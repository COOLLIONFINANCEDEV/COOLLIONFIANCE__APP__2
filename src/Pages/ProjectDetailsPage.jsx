import React from 'react'
import Box from "@mui/material/Box";
import {
  Avatar,
  Button,
  Chip,
  FormControl,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { useTheme } from "@emotion/react";
import LinearProgessCustomize from "../components/LinearProgessCustomize";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Man4Icon from "@mui/icons-material/Man4";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

const ProjectDetailsPage = () => {
  const { palette } = useTheme();

  return (
    <div
    style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
      }}
  >
    <Box
      sx={{
        width: "80%",
        height: "100%",
        marginTop:'15vh'
      }}
    >
   

      <Box
        sx={{
          width: "cacl(100% - 19px)",
          border: "1px solid",
          borderColor: palette.secondary.main,
          backgroundColor: palette.secondary.dark,
          padding: "15px",
        }}
      >
        <Box
          sx={{
            width: "cacl(100% - 20px)",
            border: "1px solid",
            borderColor: palette.secondary.main,
            backgroundColor: palette.secondary.light,
            padding: "15px",
            borderRadius: "15px",
          }}
        >
          <Box
            sx={{
              width: "calc(100% - 20px)",
              display: "flex",
              justifyContent: "flex-start",
              alignitems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <Avatar
                alt="Remy Sharp"
                src="https://source.unsplash.com/random?face"
                sx={{ width: "110px", height: "110px", margin: "15px" }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
                rowGap: "10px",
                flexDirection: "column",
                minWidth: "45%",
              }}
            >
              <Typography
                sx={{
                  fontSize: "2.3em",
                  fontWeight: "bold",
                  textTransform: "capitalize",
                }}
              >
                De Gorazon Group
              </Typography>
              <Box sx={{ width: "100%" }}>
                <LinearProgessCustomize value={60} />
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexDirection: "row",
                  }}
                >
                  <Box>
                    <Typography
                      sx={{ fontSize: "1.3em", fontWeight: "bold" }}
                    >
                      26 days
                    </Typography>
                    <Typography sx={{ color: "gray" }}>REMANING</Typography>
                  </Box>
                  <Box>
                    <Typography
                      sx={{ fontSize: "1.3em", fontWeight: "bold" }}
                    >
                      $935 to go
                    </Typography>
                    <Typography sx={{ color: "gray" }}>77% FUNDED</Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box sx={{ width: "calc(100% - 20px)", margin: "5px 15px" }}>
            <Typography
              sx={{ width: "100%", fontSize: "1.8em", fontWeight: "bold" }}
            >
              A loan of $4,075 help a member to bur a large supply of beads of
              many colors. She will use the money to buy more beads and to pay
              for the labor of.
            </Typography>
          </Box>

          <Box
            sx={{
              width: "calc(100% - 20px)",
              margin: "15px 15px",
              display: "flex",
              justifyContent: "flex-start",
              alginItems: "center",
              columnGap: "20px",
            }}
          >
            <Chip icon={<LocationOnIcon />} label="GUATEMALA" />
            <Chip label="RETAIL" />
          </Box>

          <Box sx={{ width: "calc(100% - 20px)", margin: "15px 15px" }}>
            <Typography
              sx={{
                fontSize: "1.5em",
                fontWeight: "bold",
                marginBottom: "10px",
              }}
            >
              Help fund this loan
            </Typography>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignContent: "center",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "flex-start",
                  alignContent: "center",
                  columnGap: "15px",
                }}
              >
                <Box>
                  <FormControl fullWidth>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      defaultValue="10"
                      size="small"
                      // onChange={handleChange}
                    >
                      <MenuItem value={10}>$35</MenuItem>
                      <MenuItem value={20}>$54</MenuItem>
                      <MenuItem value={30}>$100</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                <Box>
                  <Button variant="contained" color="primary" size="large">
                    Lend now
                  </Button>
                </Box>
              </Box>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "flex-end",
                  alignContent: "center",
                  columnGap: "15px",
                }}
              >
                <Button startIcon={<Man4Icon />} variant="outlined">
                  Borrower Story
                </Button>
                <Button
                  variant="outlined"
                  startIcon={<FormatListBulletedIcon />}
                >
                  Loan Details
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            width: "cacl(100% - 20px)",
            border: "1px solid",
            borderColor: palette.secondary.main,
            backgroundColor: palette.secondary.light,
            padding: "15px",
            borderRadius: "15px",
            marginTop: "15px",
            display: "flex",
            justifyContent: "center",
            alignitems: "center",
          }}
        >
          <img
            src="https://source.unsplash.com/random?family"
            alt="exemple"
            style={{ maxHeight: "50vh", borderRadius: "15px" }}
          />
        </Box>

        <Box
          sx={{
            width: "cacl(100% - 20px)",
            border: "1px solid",
            borderColor: palette.secondary.main,
            backgroundColor: palette.secondary.light,
            padding: "15px",
            borderRadius: "15px",
            marginTop: "15px",
            display: "flex",
            justifyContent: "center",
            alignitems: "center",
          }}
        >
          <Box
            sx={{
              width: "80%",
              display: "flex",
              justifyContent: "center",
              alignitems: "center",
              flexDirection: "column",
              rowGap: "15px",
            }}
          >
            <Typography
              sx={{
                fontSize: "2rem",
                fontWeight: "bold",
                TextTransform: "capitalize",
              }}
            >
              De Corazon Group's story
            </Typography>
            <Typography sx={{ fontSize: "1.2rem", textAlign: "justify" }}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Corrupti sequi dolores minima nesciunt vero rerum maxime? Illo
              id, voluptas esse tenetur facere nam ipsa cupiditate earum.
              Distinctio animi quam ipsam?. Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Dicta laboriosam minima sapiente
              doloribus itaque deserunt aperiam quasi velit. Voluptates ea
              expedita omnis nam magnam reprehenderit mollitia ullam fugit
              quos aut!
            </Typography>
            <Typography sx={{ fontSize: "1.2rem", textAlign: "justify" }}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Corrupti sequi dolores minima nesciunt vero rerum maxime? Illo
              id, voluptas esse tenetur facere nam ipsa cupiditate earum.
              Distinctio animi quam ipsam?. Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Dicta laboriosam minima sapiente
              doloribus itaque deserunt aperiam quasi velit. Voluptates ea
              expedita omnis nam magnam reprehenderit mollitia ullam fugit
              quos aut!
            </Typography>
            <Typography sx={{ fontSize: "1.2rem", textAlign: "justify" }}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Distinctio animi quam ipsam?.
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            width: "cacl(100% - 20px)",
            border: "1px solid",
            borderColor: palette.secondary.main,
            backgroundColor: palette.secondary.light,
            padding: "15px",
            borderRadius: "15px",
            marginTop: "15px",
            display: "flex",
            justifyContent: "center",
            alignitems: "center",
          }}
        >
          <Box sx={{ width: "80%", padding: "20px 0" }}>
            <Typography sx={{ fontSize: "2.3em", fontWeight: "bold" }}>
              This loan is special because clients receive in-depth trainings
              on business, health, over-indebtedness, and self-esteem.
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            width: "cacl(100% - 20px)",
            border: "1px solid",
            borderColor: palette.secondary.main,
            backgroundColor: palette.secondary.light,
            padding: "15px",
            borderRadius: "15px",
            marginTop: "15px",
            display: "flex",
            justifyContent: "center",
            alignitems: "center",
          }}
        >
          <Box
            sx={{
              width: "80%",
              display: "flex",
              justifyContent: "center",
              alignitems: "center",
              flexDirection: "column",
              rowGap: "15px",
            }}
          >
            <Typography
              sx={{
                fontSize: "2rem",
                fontWeight: "bold",
                TextTransform: "capitalize",
                marginBottom: "10px",
              }}
            >
              More about this loan
            </Typography>
            <Typography sx={{ fontSize: "1.2rem", textAlign: "justify" }}>
              This loan is facilitated by our Field Partner, Friendship
              Bridge. Field Partners are local organizations working in
              communities to vet borrowers, provide services, and administer
              loans on the ground.
            </Typography>
            <Box>
              <Typography
                sx={{
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  TextTransform: "capitalize",
                }}
              >
                About Friendship Bridge:
              </Typography>
              <Typography sx={{ fontSize: "1.2rem", textAlign: "justify" }}>
                This loan is administered by Friendship Bridge (FB), a
                nonprofit, nongovernmental organization that empowers
                thousands of impoverished Guatemalan women through its
                Microcredit Plus program. The program combines small loans
                averaging US$350 for four-to-twelve month loan terms with
                non-formal, participatory education. As FB clients, women
                start, expand, or diversify their businesses and learn
                practical lessons on topics including business, health, and
                self-esteem. FB’s clients borrow as a group, forming Trust
                Banks (groups of 7-25 women who serve as co-guarantors of the
                loan and act as a self-regulating support network).
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            width: "cacl(100% - 20px)",
            border: "1px solid",
            borderColor: palette.secondary.main,
            backgroundColor: palette.secondary.light,
            padding: "15px",
            borderRadius: "15px",
            marginTop: "15px",
            display: "flex",
            justifyContent: "center",
            alignitems: "center",
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7944.852407645024!2d-4.017898521685006!3d5.351742098827089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc1eb1095843c27%3A0x2880d47914b202df!2sAgence%20ORANGE!5e0!3m2!1sfr!2sci!4v1667039718861!5m2!1sfr!2sci"
            width="100%"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="helo"
            style={{ border: "0" }}
          ></iframe>
        </Box>

        <Box
          sx={{
            width: "cacl(100% - 20px)",
            border: "1px solid",
            borderColor: palette.secondary.main,
            backgroundColor: palette.secondary.light,
            padding: "15px",
            borderRadius: "15px",
            marginTop: "15px",
            display: "flex",
            justifyContent: "center",
            alignitems: "center",
          }}
        >
          <Box
            sx={{
              width: "80%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              rowGap: "40px",
            }}
          >
            <Typography sx={{ fontSize: "2rem", fontWeight: "bold" }}>
              Guatemala at a glance
            </Typography>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  width: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Typography sx={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                  $5,300
                </Typography>
                <Typography sx={{ fontSize: "1rem", fontWeight: "bold" }}>
                  AVERAGE ANNUAL INCOME (USD)
                </Typography>
              </Box>

              <Box
                sx={{
                  width: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Typography sx={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                  92
                </Typography>
                <Typography sx={{ fontSize: "1rem", fontWeight: "bold" }}>
                  LOANS CURRENTLY FUNDRAISING
                </Typography>
              </Box>
            </Box>
            <Button size="large" variant="contained">
              <Typography sx={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                Find More Borrowers in Guatemala
              </Typography>
            </Button>
          </Box>
        </Box>

        <Box
          sx={{
            width: "cacl(100% - 20px)",
            border: "1px solid",
            borderColor: palette.secondary.main,
            backgroundColor: palette.secondary.light,
            padding: "15px",
            borderRadius: "15px",
            marginTop: "15px",
            display: "flex",
            justifyContent: "center",
            alignitems: "center",
          }}
        >
          <Box
            sx={{
              width: "80%",
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
              flexDirection: "column",
              rowGap: "40px",
            }}
          >
            <Typography sx={{ fontSize: "2rem", fontWeight: "bold" }}>
              Contributing lenders
            </Typography>
            <Typography sx={{ fontSize: "1.1rem", fontWeight: "bold" }}>
              POWERED BY 342 LENDERS
            </Typography>
            <Box sx={{ width: "80%" }}>
              {["sylla ibrahim", "other name", "troare name"].map(
                (items, key) => (
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignitems: "center",
                      width: "100%",
                      margin: "15px 0",
                    }}
                    key={key}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyConten: "center",
                        alignItems: "center",
                        columnGap: "10px",
                      }}
                    >
                      <Avatar
                        alt="Remy Sharp"
                        src="https://source.unsplash.com/random?face"
                        sx={{ width: 100, height: 100 }}
                      />
                      <Typography
                        sx={{ fontSize: "1rem", fontWeight: "bold" }}
                      >
                        {items}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyConten: "center",
                        alignItems: "center",
                        columnGap: "10px",
                      }}
                    >
                      <Avatar
                        alt="Remy Sharp"
                        src="https://source.unsplash.com/random?animal"
                        sx={{ width: 100, height: 100 }}
                      />
                      <Typography
                        sx={{ fontSize: "1rem", fontWeight: "bold" }}
                      >
                        John Doe
                      </Typography>
                    </Box>
                  </Box>
                )
              )}
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            width: "cacl(100% - 20px)",
            border: "1px solid",
            borderColor: palette.secondary.main,
            backgroundColor: palette.secondary.light,
            padding: "15px",
            borderRadius: "15px",
            marginTop: "15px",
            display: "flex",
            justifyContent: "center",
            alignitems: "center",
          }}
        >
          <Box
            sx={{
              width: "80%",
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
              flexDirection: "column",
              rowGap: "40px",
            }}
          >
            <Typography sx={{ fontSize: "2rem", fontWeight: "bold" }}>
              Contributing lending teams
            </Typography>
            <Typography sx={{ fontSize: "1.1rem", fontWeight: "bold" }}>
              POWERED BY 65 TEAMS
            </Typography>
            <Box sx={{ width: "80%" }}>
              {[
                "STUFF YOU SHOULD KNOW",
                "PAYPARL CUSTOMERS",
                "STUFF Y OU SHOULD KNOW",
              ].map((items, key) => (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignitems: "center",
                    width: "100%",
                    margin: "15px 0",
                  }}
                  key={key}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyConten: "center",
                      alignItems: "center",
                      columnGap: "10px",
                    }}
                  >
                    <Avatar
                      alt="Remy Sharp"
                      src="https://source.unsplash.com/random?{items}"
                      sx={{ width: 100, height: 100 }}
                    />
                    <Typography sx={{ fontSize: "1rem", fontWeight: "bold" }}>
                      {items}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyConten: "center",
                      alignItems: "center",
                      columnGap: "10px",
                    }}
                  >
                    <Avatar
                      alt="Remy Sharp"
                      src="https://source.unsplash.com/random?fae"
                      sx={{ width: 100, height: 100 }}
                    />
                    <Typography sx={{ fontSize: "1rem", fontWeight: "bold" }}>
                      John Doe
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  </div>
  )
}

export default ProjectDetailsPage
