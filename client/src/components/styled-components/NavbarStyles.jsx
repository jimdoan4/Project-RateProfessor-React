import styled from 'styled-components'

export const NavContainer = styled.div`

#navbar {
    padding: 15px 25px;
  border: none;
  background: #ffffff;
  transition: padding-top 0.3s, padding-bottom 0.3s;
}

#navbar .navbar-toggler {
  background: #394475;
  border: none;
}

#navbar .navbar-nav .nav-item .nav-link {
  color: #000000;
  font-weight: 400;
  font-size: 14px;
  font-family: 'Manjari', sans-serif;
  transition: all 0.3s ease-out;
  padding-left: 30px;
  padding-right: 30px;
  font-weight: bold;
}

#navbar .navbar-nav .nav-item .nav-link.active,
#navbar .navbar-nav .nav-item .nav-link:hover {
  color: #394475 !important;
  transition: all 0.5s ease-out;
  font-weight: bold;
}

.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 25%;
  height: 25%;
}

.center-nav-links {
  margin-left: auto;
  margin-right: auto;
  text-align: center;
} 