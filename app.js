const express = require('express')
const app = express()
const port = 3000
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html')
})

app.get('/items', (req, res) => {
    res.send(JSON.stringify(o))
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

let o = {
    items: [
      {
        sys: {
          id: '1'
        },
        fields: {
          title: 'Desktop',
          price: 17999,
          image: {
            fields: {
              file: {
                url: './Images/Desktop.JPG'
              }
            }
          }
        }
      },
      {
        sys: {
          id: '2'
        },
        fields: {
          title: 'DSLR Camera',
          price: 20999,
          image: {
            fields: {
              file: {
                url: './Images/DSLRCamera.JPG'
              }
            }
          }
        }
      },
      {
        sys: {
          id: '3'
        },
        fields: {
          title: 'Go Pro',
          price: 15999,
          image: {
            fields: {
              file: {
                url: './Images/GoPro.JPG'
              }
            }
          }
        }
      },
      {
        sys: {
          id: '4'
        },
        fields: {
          title: 'AirPods Pro',
          price: 22999,
          image: {
            fields: {
              file: {
                url: './Images/AirPodsPro.JPG'
              }
            }
          }
        }
      },
      {
        sys: {
          id: '5'
        },
        fields: {
          title: 'iMac Laptop',
          price: 59999,
          image: {
            fields: {
              file: {
                url: './Images/iMacLaptop.JPG'
              }
            }
          }
        }
      },
      {
        sys: {
          id: '6'
        },
        fields: {
          title: 'Swagger Collection',
          price: 39999,
          image: {
            fields: {
              file: {
                url: './Images/SwaggerCollection.JPG'
              }
            }
          }
        }
      },
      {
        sys: {
          id: '7'
        },
        fields: {
          title: 'iPad Pro',
          price: 34999,
          image: {
            fields: {
              file: {
                url: './Images/iPadPro.JPG'
              }
            }
          }
        }
      },
      {
        sys: {
          id: '8'
        },
        fields: {
          title: 'Huawei Mate 12 Pro',
          price: 79999,
          image: {
            fields: {
              file: {
                url: './Images/HuaweiMate12Pro.JPG'
              }
            }
          }
        }
      },
      {
        sys: {
          id: '9'
        },
        fields: {
          title: 'iPhone 11 Gold',
          price: 99999,
          image: {
            fields: {
              file: {
                url: './Images/iPhone11Gold.JPG'
              }
            }
          }
        }
      },
      {
        sys: {
          id: '10'
        },
        fields: {
          title: 'Smart Charger',
          price: 1999,
          image: {
            fields: {
              file: {
                url: './Images/SmartCharger.JPG'
              }
            }
          }
        }
      },
      {
        sys: {
          id: '11'
        },
        fields: {
          title: 'Smart Watch',
          price: 10999,
          image: {
            fields: {
              file: {
                url: './Images/SmartWatch.JPG'
              }
            }
          }
        }
      },
      {
        sys: {
          id: '12'
        },
        fields: {
          title: 'iPhone XR Black',
          price: 60999,
          image: {
            fields: {
              file: {
                url: './Images/iPhoneXRBlack.JPG'
              }
            }
          }
        }
      },
      {
        sys: {
          id: '13'
        },
        fields: {
          title: 'iPhone XR Pro',
          price: 70999,
          image: {
            fields: {
              file: {
                url: './Images/iPhoneXRPro.JPG'
              }
            }
          }
        }
      },
      {
        sys: {
          id: '14'
        },
        fields: {
          title: 'iWatch',
          price: 44999,
          image: {
            fields: {
              file: {
                url: './Images/iWatch.JPG'
              }
            }
          }
        }
      },
      {
        sys: {
          id: '15'
        },
        fields: {
          title: 'JBL Wireless',
          price: 9999,
          image: {
            fields: {
              file: {
                url: './Images/JBLWireless.JPG'
              }
            }
          }
        }
      },
      {
        sys: {
          id: '16'
        },
        fields: {
          title: 'Macbook Pro',
          price: 89999,
          image: {
            fields: {
              file: {
                url: './Images/MacbookPro.JPG'
              }
            }
          }
        }
      },
      {
        sys: {
          id: '17'
        },
        fields: {
          title: 'PS5 GamePad',
          price: 4999,
          image: {
            fields: {
              file: {
                url: './Images/PS5GamePad.JPG'
              }
            }
          }
        }
      },
      {
        sys: {
          id: '18'
        },
        fields: {
          title: 'Samsung Note 10',
          price: 79999,
          image: {
            fields: {
              file: {
                url: './Images/SamsungNote10.JPG'
              }
            }
          }
        }
      },
      {
        sys: {
          id: '19'
        },
        fields: {
          title: 'Marshall Speaker',
          price: 7999,
          image: {
            fields: {
              file: {
                url: './Images/MarshallSpeaker.JPG'
              }
            }
          }
        }
      },
      {
        sys: {
          id: '20'
        },
        fields: {
          title: 'Wireless Head Phones',
          price: 3999,
          image: {
            fields: {
              file: {
                url: './Images/WirelessHeadPhones.JPG'
              }
            }
          }
        }
      }
    ]
  }