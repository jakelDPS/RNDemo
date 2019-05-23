import React, { Component } from 'react';
import { Button, StyleSheet, Platform, Text, View } from 'react-native';
import appStyle from '../styles/AppStyle';
import styles from '../styles/PrinterScreenStyle';

import RNPrint from 'react-native-print';

class PrinterScreen extends Component {
    state = {
        selectedPrinter: null
    }

    static navigationOptions = ({navigation}) => {
        return {
            title: "Printer",
        };
    };

    async printHTML() {
        await RNPrint.print({
            html: '<html>\n' +
                '\n' +
                '<head>\n' +
                '<meta http-equiv="Content-Language" content="en-us">\n' +
                '<meta http-equiv="Content-Type" content="text/html; charset=windows-1252">\n' +
                '<meta name="GENERATOR" content="Microsoft FrontPage 6.0">\n' +
                '<meta name="ProgId" content="FrontPage.Editor.Document">\n' +
                '<title>Order Confirmation</title>\n' +
                '<style>\n' +
                '<!--\n' +
                'a            { text-decoration: underline }\n' +
                'a:hover      { text-decoration: none }\n' +
                'body         { font-family: arial, helvetica, sans-serif; font-weight: normal; font-size: 8pt; color: #444444; margin: 5px }\n' +
                'table        { background-color: #F9FDFF; }\n' +
                'p, th, td    { font-family: arial, helvetica, sans-serif; font-weight: normal; font-size: 8pt; color: #444444 }\n' +
                'p            { margin-bottom: 0px }\n' +
                '.title       { font-weight: bold;   font-size: 12pt; color: #DE7008; text-align: center }\n' +
                '.subtitle    { font-weight: normal; font-size: 8pt;  color: #DE7008; text-align: center }\n' +
                '.colhead     { font-weight: normal; font-size: 8pt; background-color: #D6F4FD; color: #00529B; text-align: center; white-space: nowrap; }\n' +
                '.orderinf    { font-weight: normal; font-size: 8pt; background-color: #F9FDFF; color: #444444; text-align: center; vertical-align: top; white-space: nowrap; }\n' +
                '.lineitem    { font-weight: normal; font-size: 8pt; background-color: #F1F9FF; color: #444444; vertical-align: middle; white-space: nowrap; }\n' +
                '.subtotal    { font-weight: normal; font-size: 8pt; background-color: #DEF6FD; color: #444444; text-align: right; vertical-align: middle; }\n' +
                '.total       { font-weight: bold;   font-size: 8pt; background-color: #DEF6FD; color: #444444; text-align: right; vertical-align: middle; }\n' +
                '-->\n' +
                '</style>\n' +
                '</head>\n' +
                '\n' +
                '<body>\n' +
                '\n' +
                '<div th:with="ShowPrices = !${ShoppingProfile.getShowNoPrices()}">\n' +
                '\n' +
                '<table border="0" cellpadding="0" cellspacing="0" width="600"><tr><td>\n' +
                '\n' +
                '<p class="title">Your Order Confirmation</p>\n' +
                '<p>This is your confirmation that we have received your order.&nbsp; You will receive a follow-up confirmation when your\n' +
                'order is shipped.&nbsp; Orders received after 5pm on Friday will ship on the following Monday.<br>&nbsp;<br>To track the\n' +
                'progress of your order online, access &quot;Order History&quot; on our web site and, when requested, enter your logon id\n' +
                'and password.<br>&nbsp;<br>Thank you for this opportunity to earn your business.</p>\n' +
                '<p class="subtitle">The following is an itemization of your order.</p>\n' +
                '<table border="0" cellpadding="0" cellspacing="0" width="100%">\n' +
                '<tr>\n' +
                '<td>\n' +
                '<table border="0" cellpadding="1" cellspacing="2" width="100%">\n' +
                '<tr>\n' +
                '<td class="colhead" width="50%">Billing Address</td>\n' +
                '<td class="colhead" width="50%">Shipping Address</td>\n' +
                '</tr>\n' +
                '<tr>\n' +
                '<td valign="top" nowrap><span th:if="${Billto}">[[${Billto.getName()}]]<br>[(${Billto.fmtAddress()})]</span></td>\n' +
                '<td valign="top" nowrap>[[${Order.getShiptoName()}]]<br>[(${Order.fmtShiptoAddress()})]</td>\n' +
                '</tr>\n' +
                '</table>\n' +
                '</td>\n' +
                '</tr>\n' +
                '</table>\n' +
                '<br>\n' +
                '<table border="0" cellpadding="0" cellspacing="0" width="100%">\n' +
                '<tr>\n' +
                '<td>\n' +
                '<table border="0" cellpadding="1" cellspacing="2" width="100%">\n' +
                '<tr>\n' +
                '<td class="colhead">Order Number</td>\n' +
                '<td class="colhead">Order Date</td>\n' +
                '<td class="colhead">P.O. Number</td>\n' +
                '<td class="colhead">Req. Date</td>\n' +
                '<td class="colhead">Shipper</td>\n' +
                '<td class="colhead">Payment</td>\n' +
                '<td class="colhead">Logon Id</td>\n' +
                '</tr>\n' +
                '<tr>\n' +
                '<td class="orderinf">[[${Order.getOrderNumber()}]]</td>\n' +
                '<td class="orderinf">[[${Order.getOrderDate()}]]</td>\n' +
                '<td class="orderinf">[[${Order.getPONumber()}]]</td>\n' +
                '<td class="orderinf">[[${Order.getReqShipDate()}]]</td>\n' +
                '<td class="orderinf"><span th:if="${Shipper}">[[${Shipper.getName()}]]</span></td>\n' +
                '<td class="orderinf"><span th:if="${Order.getPaymentDetails().size() > 0}">[[${Order.getPaymentDetails().get(0).getType()}]]</span></td>\n' +
                '<td class="orderinf">[[${LogonUser.getId()}]]</td>\n' +
                '</tr>\n' +
                '</table>\n' +
                '</td>\n' +
                '</tr>\n' +
                '</table>\n' +
                '<br>\n' +
                '<table border="0" cellpadding="0" cellspacing="0" width="100%">\n' +
                '<tr>\n' +
                '<td>\n' +
                '<table border="0" cellpadding="1" cellspacing="2" width="100%">\n' +
                '<tr>\n' +
                '<td class="colhead">Product</td>\n' +
                '<td class="colhead">Quantity</td>\n' +
                '<td class="colhead">Req. Date</td>\n' +
                '<td class="colhead">Units</td>\n' +
                '<td class="colhead">Price</td>\n' +
                '<td class="colhead">Amount</td>\n' +
                '</tr>\n' +
                '<tr th:each="OrderDetail : ${Order.getOrderDetails()}">\n' +
                '<td class="lineitem">\n' +
                '<span th:if="${OrderDetail.getItemNumber()} != \'\'">[[${OrderDetail.getItemNumber()}]]<br></span>\n' +
                '<span th:if="${OrderDetail.getCustItemNumber()} != \'\'">[[${OrderDetail.getCustItemNumber()}]]<br></span>\n' +
                '[(${OrderDetail.getDescription()})]\n' +
                '</td>\n' +
                '<td class="lineitem" align="center">[[${OrderDetail.getOrderQty()}]]</td>\n' +
                '<td class="lineitem" align="center">[[${OrderDetail.getReqShipDate()}]]</td>\n' +
                '<td class="lineitem" align="center">[[${OrderDetail.getItemUom()}]]</td>\n' +
                '<td class="lineitem" align="right"><span th:if="${ShowPrices}">[[${OrderDetail.getPrice()}]]</span><span th:unless="${ShowPrices}">[(${NoPriceHTML})]</span></td>\n' +
                '<td class="lineitem" align="right"><span th:if="${ShowPrices}">[[${OrderDetail.getExtPrice()}]]</span></td>\n' +
                '</tr>\n' +
                '<tr>\n' +
                '<td colspan="3" valign="middle" nowrap rowspan="3">&nbsp;</td>\n' +
                '<td class="subtotal" colspan="2">Shipping Charges&nbsp;</td>\n' +
                '<td class="subtotal"><span th:if="${ShowPrices}">[[${Order.getFreight()}]]</span></td>\n' +
                '</tr>\n' +
                '<tr>\n' +
                '<td class="subtotal" colspan="2">Sales Tax&nbsp;</td>\n' +
                '<td class="subtotal"><span th:if="${ShowPrices}">[[${Order.getTax()}]]</span></td>\n' +
                '</tr>\n' +
                '<tr>\n' +
                '<td class="total" colspan="2">Total&nbsp;</td>\n' +
                '<td class="total"><span th:if="${ShowPrices}">[[${Order.getValue()}]]</span></td>\n' +
                '</tr>\n' +
                '<tr>\n' +
                '<td colspan="6">\n' +
                '<br>&nbsp;\n' +
                '<br>We thank you again for choosing [[${SiteInfo.getCommonName()}]].\n' +
                '<br>&nbsp;\n' +
                '<br>Sincerely,\n' +
                '<br>&nbsp;\n' +
                '<br>Your [[${SiteInfo.getSvcEmailName()}]] Team\n' +
                '<br><a th:href="@{mailto:__${SiteInfo.getSvcEmailAddr()}__}">[[${SiteInfo.getSvcEmailAddr()}]]</a>\n' +
                '<br>&nbsp;\n' +
                '<br>[[${SiteInfo.getFormalName()}]]\n' +
                '<br>[(${SiteInfo.fmtAddress()})]\n' +
                '<br><a th:href="@{http://__${SiteInfo.getCorporateURL()}__}">[[${SiteInfo.getCorporateURL()}]]</a>\n' +
                '<br>[[${SiteInfo.getPhone1()}]]&nbsp; [[${SiteInfo.getPhone1Descr()}]]\n' +
                '<br>[[${SiteInfo.getPhone2()}]]&nbsp; [[${SiteInfo.getPhone2Descr()}]]\n' +
                '<br>&nbsp;\n' +
                '</td>\n' +
                '</tr>\n' +
                '</table>\n' +
                '</td>\n' +
                '</tr>\n' +
                '</table>\n' +
                '\n' +
                '</td></tr></table>\n' +
                '\n' +
                '</div>\n' +
                '\n' +
                '</body>\n' +
                '\n' +
                '</html>\n'
        });
    }

    async printRemotePDF() {
        await RNPrint.print({ filePath: 'https://graduateland.com/api/v2/users/jesper/cv' });
    }

    render() {
        return (
            <View style={styles.container}>
                {Platform.OS === 'ios'}
                <View style={styles.button}>
                    <Button title="Print HTML"
                            color={appStyle.button.color}
                            onPress={this.printHTML}
                    />
                </View>

                <View style={styles.button}>
                    <Button
                        title="Go Home"
                        color={appStyle.button.color}
                        onPress={() => this.props.navigation.navigate('Home')}
                    />
                </View>
            </View>
        );
    }
}

export default PrinterScreen;